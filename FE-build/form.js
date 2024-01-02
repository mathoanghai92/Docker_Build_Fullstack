const chatGadgetUrlCRM = "https://lab.connect247.vn/ucrm-sso/internet-form-crm";
// const chatGadgetUrlCRM = "https://uat.basebs.vn/ucrm/internet-form-crm";
// const chatGadgetUrlCRM = "http://localhost:3000/ucrm-sso/internet-form-crm";
// const chatGadgetUrlCRM = 'http://localhost:3001/';
const listForm = [];
// recive data from modal to open modal
const a = document.getElementsByClassName("internet_form_crm");
// add info list form import in website
Array.from(a).forEach((element) => {
  listForm.push({
    tenant_id: element.getAttribute("tenant_id"),
    _id: element.getAttribute("config_id"),
  });
});
const basebs_webchat_plugin_crm = document.getElementById("internet_form_crm");
const chat_window_crm = document.createElement("iframe");
chat_window_crm.setAttribute("id", "chat_window_crm");
chat_window_crm.setAttribute("src", chatGadgetUrlCRM);
chat_window_crm.setAttribute("frameborder", "0");
chat_window_crm.setAttribute("scrolling", "no");
chat_window_crm.onload = function () {
  chat_window_crm.contentWindow.postMessage(
    {
      messageType: "send_app_info_crm",
      value: {
        listForm,
        outer_domain: window.location.origin,
        device: window.innerWidth < 768 ? "mobile" : "desktop",
      },
    },
    chatGadgetUrlCRM
  );
};
basebs_webchat_plugin_crm.style.position = "fixed";
basebs_webchat_plugin_crm.style.top = "0";
basebs_webchat_plugin_crm.style.left = "0";
// basebs_webchat_plugin_crm.style.width = "100vw";
// basebs_webchat_plugin_crm.style.height = "100vh";
basebs_webchat_plugin_crm.style.display = "block";

basebs_webchat_plugin_crm.style.zIndex = 10000;
chat_window_crm.style.width = "100vw";
chat_window_crm.style.height = "100vh";
chat_window_crm.style.position = "absolute";
chat_window_crm.style.top = "0";
chat_window_crm.style.left = "0";
chat_window_crm.style.display = "none";
chat_window_crm.style.transition = "all 0.4s";
chat_window_crm.style.animation =
  " animation: fadeIn .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;";
basebs_webchat_plugin_crm.appendChild(chat_window_crm);

function openModal(data) {
  chat_window_crm.style.display = "block";
  chat_window_crm.contentWindow.postMessage(
    {
      messageType: "send_active_modal",
      _id: data.id_config,
    },
    chatGadgetUrlCRM
  );
  const listActive = localStorage.getItem("listActive")
    ? JSON.parse(localStorage.getItem("listActive"))
    : [];

  const index = listActive.findIndex((item) => item.id === data.id_config);
  if (index !== -1) {
    listActive[index] = {
      id: data.id_config,
      time_active: new Date(),
    };
  } else {
    listActive.push({
      id: data.id_config,
      time_active: new Date(),
    });
  }
  localStorage.setItem("listActive", JSON.stringify(listActive));
  sessionStorage.setItem("listActive", JSON.stringify(listActive));
}

const checkFrequency = (id_config, frequency) => {
  let flag = true;
  const localActive = localStorage.getItem("listActive")
    ? JSON.parse(localStorage.getItem("listActive"))
    : [];
  const sessionActive = sessionStorage.getItem("listActive")
    ? JSON.parse(localStorage.getItem("listActive"))
    : [];

  switch (frequency) {
    case "only_session":
      sessionActive.forEach((item) => {
        if (item.id === id_config) {
          flag = false;
        }
      });
      break;
    case "only_everyhour":
      localActive.forEach((time) => {
        if (time.id === id_config) {
          const date = new Date(time.time_active);
          const today = new Date();

          if (
            date.getFullYear() === today.getFullYear() &&
            date.getMonth() === today.getMonth() &&
            date.getDate() === today.getDate() &&
            date.getHours() === today.getHours()
          ) {
            flag = false;
          }
        }
      });
      break;
    case "only_everyday":
      localActive.forEach((time) => {
        if (time.id === id_config) {
          const date = new Date(time.time_active);
          const today = new Date();
          if (
            date.getFullYear() === today.getFullYear() &&
            date.getMonth() === today.getMonth() &&
            date.getDate() === today.getDate()
          ) {
            flag = false;
          }
        }
      });
      break;

    default:
      break;
  }

  return flag;
};
const checkDevice = (list) => {
  const device = window.innerWidth < 768 ? "mobile" : "desktop";
  return list.includes(device);
};
const checkDomain = (list) => {
  const domain = window.location.origin;
  return list.includes(domain);
};
const checkTime = (list) => {
  let flag = false;
  const today = new Date();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;
  list.forEach((day) => {
    if (day.value === today.getDay()) {
      day.listTime.forEach((time) => {
        if (
          formattedTime === time[0] ||
          formattedTime === time[1] ||
          (formattedTime > time[0] && formattedTime < time[1])
        ) {
          flag = true;
        }
      });
    }
  });
  return flag;
};
const checkCondition = (data) => {
  let flag = false;
  const {
    is_apply_all,
    list_website,
    apply_for,
    display_frequency,
    id_config,
    time_display,
    status,
    active,
  } = data;
  const tem = is_apply_all ? true : checkDomain(list_website);
  flag =
    status &&
    active &&
    tem &&
    checkDevice(apply_for) &&
    checkTime(time_display) &&
    checkFrequency(id_config, display_frequency) &&
    !window.location.href.includes("internet-form-crm");

  if (flag) {
    openModal(data);
  }
};

// ======== nhận action từ page modal=============
const handleActionModal = (e) => {
  if (e.data.messageType === "send_data_from_modal") {
    const data = e.data.value;
    // when user click
    if (data.id_click && data.is_click) {
      data.id_click.split(",").forEach((id) => {
        document.getElementById(id)?.addEventListener("click", () => {
          checkCondition(data);
        });
      });
    }
    // when user not interact
    if (data.is_not_interact && data.time_not_interact) {
      let timer;
      function resetTimer() {
        clearTimeout(timer);
        timer = setTimeout(
          () => checkCondition(data),
          data.time_not_interact * 1000
        );
      }
      // Add event listeners to reset the timer on user interaction
      document.addEventListener("mousemove", resetTimer);
      document.addEventListener("click", resetTimer);
      document.addEventListener("scroll", resetTimer);
      // Start the timer when the page loads
      resetTimer();
    }
    // when user accsess
    if (data.is_access && data.time_access) {
      setTimeout(() => {
        checkCondition(data);
      }, data.time_access * 1000);
    }
    // when user scroll
    if (data.is_scroll && data.scroll_option) {
      if (data.scroll_option === "little") {
        document.addEventListener("scroll", () => {
          if (window.scrollY) {
            checkCondition(data);
          }
        });
      }

      if (data.scroll_option === "half") {
        document.addEventListener("scroll", (e) => {
          if (
            window.scrollY >
            (document.documentElement.scrollHeight - window.innerHeight) / 2
          ) {
            checkCondition(data);
          }
        });
      }

      if (data.scroll_option === "end") {
        document.addEventListener("scroll", (e) => {
          if (
            window.scrollY ===
            document.documentElement.scrollHeight - window.innerHeight
          ) {
            checkCondition(data);
          }
        });
      }
    }
  }
};

window.addEventListener("message", handleActionModal, false);

// ========close iframe=============
const handleCloseIframe = (e) => {
  if (e.data.messageType === "close_iframe") {
    chat_window_crm.style.display = "none";
  }
};
window.addEventListener("message", handleCloseIframe);
