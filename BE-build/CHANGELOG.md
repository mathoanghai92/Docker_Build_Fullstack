## 3.8.0 (2023-12-26)

### Bug Fixes

- duplicate ticket
- add workflow firstime checking into update related record function
- **(Object)**: format_config_time in load_record_data
- can not trigger workflow when update object interaction details
- wf update related record does not work if data is missing
- add workflow checking function to update interaction api t
- **(Object standard)**: formula field in object standard
- **(Component)**: add component setting type ticket_list_call_center with check_for_update and create tenant
- sort object standard field in popup
- **(Duplicate Rule)**: duplicate rule record when create, update record with 3rd
### Features

- sort popup data

## 3.7.0 (2023-12-19)

### Bug Fixes

- workflow firsttime not work
- can not replace prefix
- update model popup
- Remove function make directory contains error
- **(popupSetting)**: change model
- **(Object Standard)**: remove field ID in insert, update record
- update exposeAPI model
- **()**: condition in report
- can not setting batch-action expose api

### Features

- allow config call prefix

## 3.6.0 (2023-12-14)
### Bug Fixes

- **(Duplicate-rule)**: Check duplicate rules from 3rd parties when creating update records
- **(Update record)**: [#BUCRM-2226] update record with field linking
- can not query linking data from filter conditions
- unsync data between secondary and primary
- add PaginationSchema
- not append field type id if email invalid
- **()**: position name in report
- **(Knowledge Base)**: [#BUCRM-2203] Added 2 Priority fields for Object Aritcle and Object Category
- keep it ongoing search if not set priority field
- remove re escape when search user
- old condition config not working
- can not map field type user
- duplicate field when edit config
- **(Object standard)**: field formula
- **()**: position name in report
- **(Duplicate-rule)**: Check duplicate rules from 3rd parties when creating update records
- can not load expose api interaction setting
- update data linking when found related record
- can not edit expose api setting
- parse condition string before calling function
- api load linking field
- can not create contact
- related object
- can not create interaction
- can not create expose api
- can not create ic interaction
- can not update setting
- remove object_id from model
- **(Knowledge Base)**: [#BUCRM-2203] Added 2 Priority fields for Object Aritcle and Object Category
- **(workflow)**: can not linking with member
- **(Object)**: validate field update record
- **()**: quickfilter_widget
- **(IC Interaction)**: [#UCRM-2204] Integrate Custom Fields for Interaction

### Chore

- handle linking and lookup filter condition
- rename fieldId to field_id

### Features

- add authen for expose api interaction
- add new payload
- add return key
- create contact, ticket, lead from mapping
- setting interaction expose api

## v2.55.0 (2023-12-01)

## v2.54.1 (2023-11-24)

## v2.54.0 (2023-11-23)

## v2.50.1 (2023-09-21)

## v2.50.0 (2023-09-15)

## v2.49.1 (2023-09-07)

## v2.49.0 (2023-08-31)

## v2.48.0 (2023-08-25)

### Bug Fixes

- **(redis)**:  Can't connect to Redis Sentinels when it has no authentication configuration.
- **(redis)**: resolve redis-sentinel conf without auth

## v2.47.1 (2023-08-17)

## 3.5.0 (2023-12-07)

### Bug Fixes

- patch csrf reject method
- enable csrf protection
- **()**: fix_export_report
- remove pre-looad converting filter condition
- revert filter conditions back to previous version
- provide priority in model
- default priority is wrong
- sort the category by priority
- change filter condition to str in order to store in the database
- **(Interaction-v3)**: [#BUCRM-2185] The automatically generated Interaction call cannot retrieve the data of the Contact's accompanying linking fields
- update field type
- migrate optionalField model to another file to avoid circular import
- Remove unused validation
- **(Popup Call)**: Iframe embedding feature for Component in Consolidated View and Popup Call screen
- change priority field from string to int
- force update setting not working
- update config
- **(Component Interaction)**: [#BUCRM-2184] format field time Modified Time/Created date
- **(Component Interaction)**: [#BUCRM-2184] format field time Modified Time/Created date
- **(Popup Call)**: Consolidated View

### Features

- **(thirdParty)**: allow config request timeout
- **(Component)**: [#UCRM-2341] Iframe embedding feature for Component in...
- Replace the new type of filter_condition
- Replace the new filter condition
- **(Component)**: [#UCRM-2341] Iframe embedding feature for Component in Consolidated View and Popup Call screen

## 3.4.1 (2023-12-04)

### Bug Fixes

- Code missing
- **()**: Bump-version v3

## 3.4.0 (2023-12-01)

### Bug Fixes

- resolve  error
- remove unused var
- link all related fields in related object
- **()**: condition_report
- can not update linking when have one or multiple contact
- **(call)**: get data from related contact
- **(Tenants)**: allow Description update-tenant
- **(Tenants)**: create tenant
- rename text_field_min_length to input_min_length in the internet form schema
- **(User)**: Update code version 2
- **(User)**: api load list user
- **(Tenant)**: create_tenant_func

### Features

- add in and nin operator to filter condition
- **(finesse)**: Pre check variable before replace string
- **(finesse)**: Hanle multi cases about identify phone prefix
- Add input_min_length  to internet form config schema
- Add text_field_max_length field to internet form config schema

## 3.3.3 (2023-11-30)

### Bug Fixes

- **(Tenants)**: hotfix allow Description update-tenant

## 3.3.2 (2023-11-29)

### Bug Fixes

- **(Tenants)**: hotfix create tenant

## 3.3.1 (2023-11-24)

### Bug Fixes

- disable required option in the optional field
- **(re-index)**: check_replica_lag
- **(Object-standard)**: formula field (last+middle+first)
- **(Workflow)**: scheduler

## 3.3.0 (2023-11-23)

### Bug Fixes

## 3.2.0 (2023-11-16)

### Bug Fixes

- **(ldaps)**: email does not have domain
- **(Object-standard)**: [#UCRM-2186] check for update
- **(Call)**: remmove require on middlename and lastname
- **(vbee)**: can not write interaction
- **(C247Standard)**: change total-duration  to text
- **(Interaction)**: interaction_third_party_id
- can not map agent_name
- **(callCenter)**: missing mapping data
- **(C247Cloud)**: can not update end-call data
- **(Update object standard)**: [#UCRM-2230] Button Check For Update group
- **(RecycleBin)**: load_list_view in RecyclleBin
- **(check interaction)**: check interaction
- **(Object/Fields)**: [UCRM-2217] Not Allow Admin to remove Standard Object v� Standard Fields
- **(create-tenant)**: hide check_replica_lag func create tenant
- **(Object-standard)**: [#UCRM-2223] [Field Setting] Only required First name of Contact

### Chore

- Escape the raw string before using  to avoid mongodb error
- Add optional field config to InternetForm Schema

### Features

- [UCRM-2249] Add the file labels management
- sla_mass_delete_edit
- row_summary_report
- **(IC)**: auto complete by system

## 3.1.0 (2023-11-02)

### Bug Fixes

- **(workflow)**: check working hour condition
- **(workflow)**: working-time not work
- **(C247Cloud)**: missing third_party_id in call interaction detail
- **(workflow)**: working-time not work
- **(IC)**: update social id when merge contact
- assign to not work
- **(C247)**: can not linking contact with interaction
- **(root)**: update field Description in info root
- **(IC)**: error update social id to null
- **(ucrm-v3)**: merge ucrm-v2
- sla rule id
- raise name
- **(IC)**: update contact with social id
- raise name
- **(UserRoleProfile)**: change password and reset password user root
- can not update social-id from ic
- **(LDAP Integration)**: [#UCRM-2144] Allow to login with Alias
- Add the 'reason' field by spliting the 'status' field
- **(Tenants)**: remove check_replica_lag ver3 -- 1 db-version 6.0.9
- **(.example.env)**: change connect string mongodb version 6.0.9
- can not complete interaction
- workflow create record not work
- **(EmailIC)**: missing mapping field
- **(LDAP Integration)**: [#UCRM-2144] Allow to login with Alias
- [Security] - [NCB] Unsafe Use Of Target blank
- **(condition)**: none-type error
- INT prefix
- workflow with datetime not work
- the priority sorting is wrong
-  load data in list view
- workflow with datetime not work
- **(Object/object)**: [#UCRM-2087] Merge contact with social id Object Standard version 3
- INT prefix
- **(C247Cloud)**: not popup
- can not linking ticket with interaction
- **(Object/object)**: [#UCRM-2101] Performance when merging records
- typo error
- **(ObjectStandard)**: update field file constants
- **(Object/object)**: [#UCRM-2087] Merge contact with social id
- **(Object/object)**: [#UCRM-2101] Performance when merging records
- **(Create-tenant)**: update field version 3 in scan-services

### Chore

- Change the colum header when exporting the report
- Add the 'soft_required' field to the Object Field properties
- Change the email duplication config from true to false
- **(AgentMonitor)**: Add the export feature which exports users status logs
- Add the sort by priority to the api get list config
- Add the priority, input_max_length to the InternetForm Schema
- provide config key to fetch data in get_all_tenant_configuration
- allow to using duplicated email on email scanner
- change shift_work fields define
- add optional field into InternetForm config model
- [#UCRM-263] Allow Tenant to setup Working Hours and Holidays
- **(AssignmentRule)**: Add the bussiness hours checking to asignment rule

### Features

- disable workflow and send noti when data not valid
- **(workflow)**: allow select field value from related record
- quick_filter

## 3.0.0 (2023-10-12)

### BREAKING CHANGE

-  Update UCRM version 3

### Bug Fixes
- **(Interaction)**: record authorization
- **(Object Standard)**: create record with table social id
- [#BUCRM-2039] Remove password comment
- [#BUCRM-2044] Remove the hardcoded secret key
- **(Email)**: Use regex to retrieve the CID, rather than hardcoding it.
- **(Popup-V3)**: [#BUCRM-2027] Decentralize permissions in the object
- **(Call Finesse-V3)**: [#BUCRM-2007] Global Search and Popup data when share = Criteria Sharing
- **(Email)**: Get the requester's approval as the owner of the interaction instead of the root user.
- **(Email)**: Change the linking data method from hardcode to dynamic
- **(global_search)**: [#BUCRM-2001] Search results are not returned when using global search with an agent account
- **(V3-Call popup configuration)**: [#BUCRM-2025] add component_setting to the components tab
- missing middle name
- can not linking contact related
- **(Component Interaction)**: [#BUCRM-2008] object decentralization Object Interaction, Interaction Detail
- **(Duplicate rule)**: [#UCRM-2009] check duplicate rule in wf
- **(Interaction)**: [#UCRM-1821] add api load_chat_interaction_detail v3

### Chore

- Resoleve the circular import

## demo-dab-06-10-2023 (2023-10-06)

### BREAKING CHANGE

- **(ucrm-be)**: [#UCRM-1797] Start UCRM version 3.x.x

### Bug Fixes

- **(Interaction)**: [#UCRM-1821] add api load_chat_interaction_detail v3
- missing interaction type in ic-details
- missing complete_by in ic
- not mapping completed by
- show ic interaction
- missing mapping agent-ic with agent-crm
- typo
- missing argument on update ic interaction
- remove default value for interaction
- default value for standard interaction
- **(IC)**: not linking contact
- can not link contact if no ticket created
- **(Interaction)**: [#UCRM-1827]: popup-call
- load list-view data
- type error
- send contact detail to ws with flow auto create
- [#BUCRM-1962] remove linking field id from contact
- **(Interaction)**: [#UCRM-1827]: popup-call
- **(LDAP)**: by pass empty, null array email
- **(workflow)**: wf not run when popup call
- **(CallCenter)**: workflow firsttime
- error when linking interaction details
- can not linking interaction contact
- missing total duration
- **(Popup call)**: [#UCRM-1803] expose-api setting
- error when select multiple contact
- wrong agent name in c247-standard
- workflow
- no interaction when popup single contact
- missing extension-id in call details interaction
- missing extension transfer
- missing extension Id
- token expiration time in c247
- **(CallCenter)**: can not get call interaction details
- missing talkover_percentOfCall
- can not update direction
- **(CallCenter)**: can not get link-recording
- **(CallCenter)**: wrong interaction direction
- workflow
- can not get calabrio call detail
- **(create-tenant)**: [#BUCRM-1892] Edit field name Standard object
- disable multiple popup check
- import module error
- default value for standard interaction
- **(Interaction)**: can not update interaction details when update score
- **(Fineese)**: can not use dynamic extension
- **(Template)**:  Fix Constant
- **(Knowlegdebase)**:  Fix Constant
- **(Fineese)**: can not get holine in fineese
- **(CallCenter)**: add type for call interaction
- **(Call-Center)**: missing type, channel
- **(Call-C247)**: missing modify_by, modify_time
- **(C247-Cloud)**: can not synchronize status
- **(tenant)**: [UCRM-1962]: Delete-tenant
- **(tenant)**: [#BUCRM-1890]: auto setting KNB
- **(Standard Object)**: [#UCRM-1888] Add/edit/delete Contact feature (following...
- **(tenant)**: [#BUCRM-1889]: create Socail ID with object Socail
- template change password
- missing object related in field linking
- missing prefix in field id
- datetime in fineese
- wrong date-time format
- **(ExposeAPIs, ObjectStandardization)**: [#UCRM1888, #UCRM1803] expose API create/update Contact standard
- **(Standard Object)**: [#UCRM-1888] Add/edit/delete Contact feature (following Standard Object model)
- **(DefaultObjectCollection)**: [#UCRM-1797]: create-tenant
- **(Expose-Api)**: [#UCRM-1803] ExposeApi create/update specific to the Contact object
-  performance improvement
-  create related object and search management
- **(DefaultObjectCollection)**: [#UCRM-1797]: create-tenant
-  Object Field Contact

### Chore

- type error
- **(EmailInteraction)**: Add standard email interaction flow for outgoing email
- remove comment
- remove comment code
- refactor code
- remove entrypoint.sh
- move raw string to constant
- lint code

### Features

- insert record v3
-  create custom view default
-  Object Field Article and Object Field Call Details
-  Object Field Contact
-
=======
## 2.56.1 (2023-12-14)

### Bug Fixes

- **(Update record)**: [#BUCRM-2226] update record with field linking
- can not query linking data from filter conditions
- unsync data between secondary and primary
- add PaginationSchema
- **()**: position name in report
- old condition config not working
- **()**: position name in report
- parse condition string before calling function
- api load linking field
- **(workflow)**: can not linking with member
- **(Object)**: validate field update record
- **()**: quickfilter_widget
- **(IC Interaction)**: [#UCRM-2204] Integrate Custom Fields for Interaction

### Chore

- handle linking and lookup filter condition

## 2.56.0 (2023-12-07)

### Bug Fixes

- patch csrf reject method
- enable csrf protection
- **()**: fix_export_report
- remove pre-looad converting filter condition
- revert filter conditions back to previous version
- provide priority in model
- default priority is wrong
- sort the category by priority
- change filter condition to str in order to store in the database
- update field type
- migrate optionalField model to another file to avoid circular import
- Remove unused validation
- change priority field from string to int
- force update setting not working

### Features

- **(thirdParty)**: allow config request timeout
- Replace the new type of filter_condition
- Replace the new filter condition

>>>>>>> 448332f77546aaddb0db2e50b3aa9bb1877a298a
## 2.55.0 (2023-12-01)

### Bug Fixes

- **()**: condition_report
- rename text_field_min_length to input_min_length in the internet form schema
- **(User)**: api load list user

### Features

- add in and nin operator to filter condition
- **(finesse)**: Pre check variable before replace string
- **(finesse)**: Hanle multi cases about identify phone prefix
- Add input_min_length  to internet form config schema
- Add text_field_max_length field to internet form config schema

>>>>>>> 3072d4be890d14f99912591981451cff222fa59b
## 2.54.1 (2023-11-24)

### Bug Fixes

- disable required option in the optional field
- **(re-index)**: check_replica_lag
- **(Workflow)**: scheduler
>>>>>>> 44005b445c87bd1e3cc9e83575a2c74c7d462482
## 2.54.0 (2023-11-23)

### Bug Fixes

- **(User)**:  update inactive or active user
- **(custom-report)**: [#UCRM-2186] Display and enable deactivation of suspended Keys in Report
- **()**: bump-version
- **(ldaps)**: email does not have domain

### Chore

- add the priority field to category and article setting

### Features

- **(ldap)**: set ldap user to inactive
- Implement the force-update setting feature
- **()**: row_summary

## 2.53.0 (2023-11-16)

### Bug Fixes

- **(vbee)**: can not write interaction

### Chore

- increase the recursive checking to 10 times
- increase the recursive check to 10 times

### Features

- **()**: row_summary
- **(vbee)**: add outgoing type
- **()**: row_summary
- add the email storing feat
- row_summary_report
- sla_mass_delete_edit
- row_summary_report

## 2.52.0 (2023-11-10)

### Bug Fixes

- **(check interaction)**: check interaction

### Chore

- Add optional field config to InternetForm Schema

### Features

- [UCRM-2249] Add the file labels management
- sla_mass_delete_edit
- **(IC)**: auto complete by system

## 2.51.1 (2023-11-02)

### Bug Fixes

- **(workflow)**: check working hour condition
- **(workflow)**: working-time not work
- assign to not work
- **(root)**: update field Description in info root
- sla rule id
- raise name
- **(UserRoleProfile)**: change password and reset password user root
- **(LDAP Integration)**: [#UCRM-2144] Allow to login with Alias
- Add the 'reason' field by spliting the 'status' field

### Chore

- Change the colum header when exporting the report
- Add the 'soft_required' field to the Object Field properties
- Change the email duplication config from true to false



## 2.51.0 (2023-10-26)

### Bug Fixes

- workflow create record not work
- [Security] - [NCB] Unsafe Use Of Target blank
- **(condition)**: none-type error
- workflow with datetime not work
- the priority sorting is wrong
-  load data in list view
-  load data quick_filter
- **(Object/object)**: [#UCRM-2101] Performance when merging records
- typo error
- bump-version 2.50.3 (2023-10-12)
- [#BUCRM-2039] Remove password comment
- [#BUCRM-2044] Remove the hardcoded secret key

### Chore

- **(AgentMonitor)**: Add the export feature which exports users status logs
- Add the sort by priority to the api get list config
- Add the priority, input_max_length to the InternetForm Schema
- provide config key to fetch data in get_all_tenant_configuration
- allow to using duplicated email on email scanner
- change shift_work fields define
- add optional field into InternetForm config model
- [#UCRM-263] Allow Tenant to setup Working Hours and Holidays
- **(AssignmentRule)**: Add the bussiness hours checking to asignment rule

### Features

- disable workflow and send noti when data not valid
- **(workflow)**: allow select field value from related record
- quick_filter

## 2.50.3 (2023-10-12)

### Bug Fixes

- **(Email)**: Use regex to retrieve the CID, rather than hardcoding it.

## 2.50.2 (2023-10-05)

### Bug Fixes

- **(upload-file)**: [#BUCRM-1988] Allows uploading files to print signatures
- **(Email)**: Add filename checking in image tags to avoid missing images
- **(WorkflowFT)**: Query new data before chchecking wf firsttime
- Add field _id to the ObjectGroup Model to prevent the API Mass asignment
- **(Email)**: Add a pre-check CID header to avoid the mistake of image replacement.
- **(Delete-tenant)**: [#UCRM-1962] confirm delete tenant
- **(ObjectGroup)**: add class Meta in model ObjectGroup(Schema)
- allow file extension .wav
- **(Email)**: Increase the length of token_urlsafe to avoid duplicate images.
- **(ResetPassword)**: Change content in form reset password
- Increase the number of record_per_page to 5000 in the pagination api
- **(ResetPassword)**: Change content in form reset password
- [#BUCRM-143] Fix Interger Overflow in apis that using pagination
- [#BUCRM-1942] API mass asignment - add validation for loaload list view data api
- [#BUCRM-1942] API mass asignment - add validation for load form create api
- [#BUCRM-1942] API mass asignment - add validation for hight light and object template api
- [#BUCRM-1942] API mass asignment - add validation for get widget api
- [#BUCRM-1942] API mass asignment - add validation for load fields in list view  api
- [#BUCRM-1942] API mass asignment - add validation for load object permisson api
- [#BUCRM-1942] API mass asignment - add validation for load object fields permisson api
- [#BUCRM-1942] API mass asignment - add validation for get user details api
- [#BUCRM-1942] API mass asignment - add validation for favorite object api
- token c247 cloud timeout
- **(Email)**: only applying Bcc headers to outlook transport

### Chore

- update load list view payload

## 2.50.1 (2023-09-21)

### Bug Fixes

- **(Email)**: Wrong attachments stored
- **(Email)**: Auto refresh token after soft time
- **(security)**: remove library Pyrebase4==4.3.0 in file requirements.txt
- **(WorkflowUpdateRelatedSource)**: Cannot get current record data
- bump version

### Chore

- **(Internetform)**: Add pagination for get list configuration api
- **(Email)**: The email outgoing can not be sent to bcc
- **(KnowledgeBaseEnhancement)**: Add modify time sorting for optional

## 2.50.0 (2023-09-14)

### Bug Fixes

- **(Template)**:  Fix Constant
- **(SLA)**: [#BUCRM-1911] Fix SLA calculate time
- **(Security)**: insecure tags html template
- **(Email)**: Invalid Signature when decoding email pwd
- **(Email)**: Improve base code
- **(Email)**: can not send mail to cc, bcc
- template change password
- **(tenant)**: [UCRM-1962]: Delete-tenant
-  bump-version

### Chore

- **(Internetform)**: Change the method which get request ip
- **(Email)**: add customization exception for mailbox
- add customization conf for gunicorn
- **(InternetForm)**: Add defautl_value attribute for internet form config

### Features
q
- **(ConsolatedView)**:  Feat Layout return
- **(InternetForm)**: Add request ip saving feature
- **(SLA)**: [#UCRM-2000] Feat SLA Healthcheck

## 2.49.1 (2023-09-07)

### Bug Fixes

- **(User)**: Add permission for viewing logs api after importing users
- **(Email)**: missing base64 lib
- **(Email)**: Query mistake
- **(Email)**: Load config before sending mail from message_id
- **(Email)**: Convert the datetime format of the mailbox using the datetime setting in current tenant
- **(Email)**: Add a record check before raise an error if a mailbox found while scanning email
- **(Email)**: Change the defautl encoding from 'quote printable' to 'base64' to avoid encoding errors
- **(Email)**: [#BUCRM-1938] Fix the incorrect datetime when sending an email after approving it
- **(Email)**: Change the defautl encoding from 'quote printable' to 'base64' to avoid encoding errors
- **(SLA)**: [#BUCRM-1822] Fix SLA Pending
- **(SLA)**: [#BUCRM-1822] Fix SLA Request
- **(Email)**: Fix the email grouping logic
- add the order by query when fetching email from o365 to avoid emails not grouped
- bump-version

### Chore

- **(Email)**: Implement message error storing feature
- disable the outgoing request logging Propagation

## 2.49.0 (2023-08-31)

### Bug Fixes

- change encoding of email message to utf-8 to avoid potential encoding issues
- **(Email)**: Add None to pop function to avoid item has no attribute pass_word
- **(Email)**: update mailbox datetime when approving an email
- **(Email)**: store the plaintext body of the email instead of full html, check the content-type in the email's headers to avoid type error
- **(Email)**: Fix some bugs
- **(Email)**: Remove the get message method when checking the email connection to avoid timeout
- **(office365.py)**: change method call from 'inbox_folder' to 'get_folder' to fix incorrect method name
- **(Email)**: Remove password key when passing falsy value into it
- **(Email)**: Can not update root email config due to a key error
- **(Email)**: Remove password validation when saving config
- **(Email)**: Implement get mail folders for owa transport
- resolve the config list view not showing owa transport
- Missing param
- **(Custom-report)**: [#UCRM-1068]: check name report when run_report
- **(Delete-user)**: [#BUCRM-1738]: update list user when delete-user

### Chore

- **(Email)**: migrate log from root to a new handler
- remove test
- add test.py to git ignore
- **(celery)**: support redis sentinel without  password
- **(Email)**: add test cases for ImapTransport, Office365Transport, and OWATransport classes
- **(Email)**: add imap testcases

### Features

- **(Email)**: Add owa transport for sending email flow

## 2.48.0 (2023-08-24)

### Bug Fixes

- datetime_local_constant
- **(Encrypt data)**: [#BUCRM-1841]: decode information encoded in URL Popup
- **(Dynamic button)**: [#BUCRM-1836] update field date/date-time local
- **(DynamicButton)**: [#UCRM-1745] refactor
- timming sla
- **(Duplicate rule)**: [#BUCRM-1808] Duplicate rule in expose-api update
- **(DynamicButton)**: [#UCRM-1745] triggered-user
- **(Workflow)**: [#BUCRM-1782] workflow_schedule_source_record
- **(SLA)**: [#BUCRM-1822] sla_pending_time
- [#1845] security django
- **(Report)**: [#BUCRM-1819] Initialize chart types with a value of 0
- Bump-version

### Chore

- **(celery)**: support redis sentinel without  password
- **(Email)**: add imap testcases
- **(Email)**: add imap testcases
- **(Email)**: refactor coding style
- **(Email)**: add owa type
- refactor email feature
- **(InternetForm)**:  change pagination_option field in InternetFormListFieldSchema class to use fields.Nested for better schema definition
- **(InternetForm)**: change pagination_option field from Nested to List to allow multiple value
- **(models.py)**: add new fields 'section', 'conditional_pagination', 'pagination_option', and 'sections' to the InternetFormConfigSchema

## 2.47.1 (2023-08-17)

### Bug Fixes

- Comment berfore bump-version
- **(dynamic-button)**: [#UCRM-1739] return all fields in dynamic_field
- **(IC)**: remove assign-to
- **(KnowledgeBase)**: Add script for migrating private image
- **(KB)**: Add script migrate image
- **(UploadFile)**: resolve the issue that user in another tenant is able to access another tenant's resource
- **(UploadFile)**: add public folder
- remove per root func update_object_media_tenant
- **(KnowledgeBase)**: Improve logic when handle a large article body
- **(Object/services)**: [#UCRM-389] (Workflow-Action) Allow to increase/decrease...
- remove root permission on load object tenants
- **(Workflow-Action)**: [#UCRM-390] Allow to increase/decrease field number when Update Source Record
- **(Object/services)**: [#UCRM-390] (Workflow-Action) Allow to increase/decrease field number when Update source Record
- can not sync ldap
- remove per root func update_object_media_tenant

## 2.47.0 (2023-08-10)

### Bug Fixes

- **(KB)**: Can not filter category
-  interaction value None
- **(get_ic_interaction_qm)**:  get data email in interaction
- **(Object/services)**: [#UCRM-389] remove Allow to increase/decrease field number when Update Record
- **(Object/services)**: [#UCRM-389] (Workflow-Action) Allow to increase/decrease...
- **(Object/services)**: [#UCRM-389] (Workflow-Action) Allow to increase/decrease field number when Update Record
- **(TenantConfiguration)**: [#UCRM-1775] add field Name in func get_tenants_clone
- **(Object/services)**: [#BUCRM-1785]: Create record with field assign to = type user
- **(Object/services)**: [#BUCRM-1785] Workflow Create record with type assign to = type user
- **(consolidated-view)**: [#BUCRM-1772] ticket load unrelated contact, account
- **(article.py): remove unused variable 'highlight_fields' from get_search method fix(article.py): remove unused variable 'filter_array' from get_search method fix(article.py): remove unused parameter 'additional_filter_query' from get_search method fix(article.py): remove unused parameter 'additional_dsl_query' from get_search method fix(article.py): remove unused parameter 'shuffle_results' from get_search method fix(article.py): remove unused import 'collections_abc' from ArticleService class fix(article.py): remove unused import 'constants' from ArticleElsSearchService class fix(article.py): remove unused import 'smbproject.Common' from ArticleElsSearchService class fix(article.py): remove unused import 'constants' from ArticleElsSearchService class fix(article.py): remove unused import 'ArticleSearchableField' from ArticleElsSearchService class fix(article.py): remove unused import 'ArticleElsSearchService' from ArticleService class fix(article.py): remove unused import 'Q' from ArticleElsSearchService class fix(article.py): remove unused import 'RecordPermission' from ArticleElsSearchService class fix(article.py): remove unused import 'article_svc' from get_accessible_records_query method in ArticleElsSearchService class fix(article.py): remove unused import 'article_svc' from get_accessible_records_query method in ArticleElsSearchService class fix(article.py): remove unused import 'article_svc' from get_accessible_records_query method in ArticleElsSearchService class fix(article.py): remove unused import 'article_svc' from get_accessible_records_query method in ArticleElsSearchService class fix(article.py): remove unused import 'article_svc' from get_accessible_records_query method in ArticleElsSearchService class fix(article.py): remove unused import 'article_svc' from get_accessible_records_query method in ArticleElsSearchService class fix(article.py): remove unused import 'article_svc' from get_accessible_records_query method in ArticleElsSearchService class fix(article.py): remove unused import 'article_svc' from get_accessible_records_query method in ArticleElsSearchService class fix(article.py): remove unused import 'article_svc' from get_accessible_records_query method in ArticleElsSearchService class fix(article.py)**: remove unused import 'article_svc' from get_accessible_records_query method
- **(KnowledgeBase)**: Resolve the id searching issue (#BUCRM-1787)
- **(expose API check)**: [#BUCRM-1784] Decrypt data in Expose API check
- conflict
- bump-version

### Features

- **(get_ic_interaction_qm)**:  get data email in interaction
- **(SLA)**: [#UCRM-1709] Feature Recalculate time SLA

## 2.46.0 (2023-08-03)

### Bug Fixes

- display invalid date in expose api
- **(Report)**: return data in order
- remain the same report's data on reload
- **(Email)**: revert code to avoid errors when another place is using
- load hidden field in IC setting
- **(models.py): change 'required' and 'field_type' fields in InternetFormListFieldSchema to be optional feat(models.py)**: add 'description' field to InternetFormListFieldSchema to provide additional information about the field
- **(export report pdf)**: [#BUCRM-1754] export report pdf
- **(TenantConfiguration)**: [#UCRM-1775] allow_clone_tenant when clone tenant
- **(ExposeAPI)**: Resolve incorrect kwargs parameters that lead to an issue when updating a record via the exposed API.
- allow_clone_tenant when clone tenant
- add the keep_original_subject to update template payload
- [#BUCRM-1659] Duration time when closing SLA with workflow
- allow_clone_tenant when clone tenant
- allow field-ic to be none
- remove validate ic-field
- [#BUCRM-1627] [SLA] Depend on Parrent
- downgrade codestyle version
- add target version to ruff
- **(custom_report)**: [#UCRM-1068] return 0 if query []
- **(Email)**: resolve the alias issue when there is no default alias configuration

### Chore

- **(settings.py)**: set propagate to False for all loggers except root to prevent duplicate log messages
- change logging setting
- Move the exchangelib module to the section where it is being used.
- revert static
- refactor code
- **(pre-commit)**: Add ruff tool

### Features

- **(urls.py): add new debug endpoint for workflow scheduler to handle GET requests with 'tenant_id' parameter fix(views.py): add condition to check if 'turn_on_sla' query parameter is present before starting scan_component_campaign and turn_on_all_sla_scanners threads fix(scanner.py): change logger name from constants.LOG_EMAIL to constants.NAME_LOG_APP feat(workflow_scheduler_helper.py): add logging statements to track the number of records and individual records being processed in the workflow scheduler fix(connect.py): remove unnecessary logging code in CommandLogger class fix(decorator.py): add missing import for 'Schema' from marshmallow feat(decorator.py)**: handle manual_parameters_schema as a dictionary and convert it to a Schema object if it's not callable
- **(Finesse)**: add encrypt data method
- add not today condition
- add option to toggle subject replacement when using email template
- add option to search articles by ID
- 
## 2.45.1 (2023-07-28)

### Bug Fixes

- hot-fix custom-report 28-07-2023
- bump-version
- bump-version

## 2.45.0 (2023-07-27)

### Bug Fixes

- **(Email)**: Resolve the alias issue when entering vietnamese characters
- **(get_ic_interaction_qm)**:  sort in get_ic_interaction_qm
- IC config
- **(Report)**:  fix_export_pdf
- **(KnowledgeBase)**: Resolve the issue of creating an article that doesn't have a category
-  refactor code
- **(KnowledgeBase)**: Resolve missing votes, views when updating the  article
- [#UCRM-1528] maxTimeMS function run_report 20 minute
- **(CampaignMemberTask)**:  model check request and param
- [#UCRM-1528] maxTimeMS query 15p
-  constants is dict
- **(get_campaign_member_or_task)**:  secure the value passed in request
- [#UCRM-1528] maxTimeMS query 15p
- [#UCRM-1528] export file excel
- IC mapping missing label in api create
- remove modify_time in func time_delete_record
- **(QMQuickFilter)**:  allow qm_quick_filter_list is None
-  interaction_id is None
- [#UCRM-1528] export file excel
- remove ID when update record
- **(custom_report)**: [UCRM-1068] maxTimeMS query custom_report
- [#UCRM-1528] export file excel
- **(Workflow)**: Add norecurese decorator to workflow update record
- **(custom_report)**: [UCRM-1068] create custom_report
- **(QualityManagement)**: [UCRM-981] Field permissions in QM
- **(IC)**: expose api check token
- **(Email)**: Keep original password if no pass password when update
- **(UploadFile)**: change the filename generated method
- [#UCRM-1528] export file excel
- **(Email)**: fix alias issue
- [#UCRM-1528] export file excel
- **(ELS)**: allow unverified cert when calling api
-  insert many in db component

### Chore

- merge Dev
- refactor code
- only using ruff tool
- only using ruff tool
- **(get_ic_interaction_qm)**:  sort by id in descending order
- **(get_ic_interaction_qm)**:  sort sent_time
- remove logging propagate
-  allow transmission limit
- add tool ruff
- **(QualityManagement)**:  edit url
- **(Email)**: add defautl email alias option to config
- **(System)**: add option validate request before access to view
- **(Logs)**: Apply log to console for all logging settings
- update elasticsearch v8
- update scripts email

### Features

-  get_ic_interaction
-  QMQuickFilter

## 2.44.0 (2023-07-20)

### Bug Fixes

- **(formulaField)**: fix the format of formulafield value'
- **(Campaign)**:  Fix tenant id campaign
- missing search when load user details
- **(Workflow)**: [#BUG-1724] wrong format datetime
- **(Email)**: allow none value on default email settings in root tenant
- **(Email)**: get root email to use if no default mail config found
- **(Report)**:  "Fix Export PDF down Weasy Print 52.5"
- **(IC)**: wrong api format
- **(IC)**: wrong IC url
- **(handle_search_custom_view)**:  handle_search_custom_view with value of str
- [#UCRM-1505]: delete user with DynamicButtonAction
- bump-version

### Chore

- Add script locust and test smtp

### Features

- **(Quality Management)**: [#UCRM-1576] Update Field Return Form
- **(Quality Management)**: [#UCRM-1576] Update Field Return Detail

## 2.43.0 (2023-07-13)

### Bug Fixes

- [#UCRM-1505]: delete user with DynamicButton
- remove create index field type linkingobject when create field
- **(Quality Management)**: [#UCRM-963] Add Field File
- **(Consolidated-View)**: show all record data when linking value is null
- **(Consolidated-View)**: Can not load related record
- **(Quality Management)**: [#UCRM-963] Add Clone QM Setting
- **(Quality Management)**: [#UCRM-963] Add Clone QM Setting
- **(Finesse)**: Add agent monitor handler when using dynamic extension
- **(Finesse)**: resolve the popup issue when using dynamic extension
- **(Redis)**: Missing variable when switch to normal version
- **(UserRoleProfile)**: [#UCRM-1505]: update api delete_user
- **(UserRoleProfile)**: [#UCRM-1505]: update api delete_user
- **(UserRoleProfile)**: [#UCRM-1505]: update api delete_user
- **(Redis)**: Can not decoded response
- **(Email)**: filter invalid email

### Chore

- get login state
- change maxPoolSize
- **(Finesse)**: add allow_dynamic_extension to api get_user_details
- **(Celery)**: Patch tick function
- **(Consolidated-view)**: remove unused variable
- **(celery)**: patch prefix task id

### Features

- **(Quality Management)**: [#UCRM-957] Update QM Status
- **(Quality Management)**: [#UCRM-957] Add return field

## 2.42.0 (2023-07-06)

### Bug Fixes

- **(Email)**: filter invalid email
- **(Email)**: [#BUCRM-1691, #BUCRM-1675] add case handle inline image, add case hanle old object prefix
- **(QualityManagement)**: [#UCRM-957] add api get_event_calculations in QM
-  quick filter is accepted by all custom views
- **(CalabrioIntergration/services)**: [#UCRM-1503] Sync QM fields from old...
- clear data returned during search with no data
- **(CalabrioIntergration/services)**: [#UCRM-1503] Sync QM fields from old Interaction to New Interaction
-  apply quick filter to all custom views
- clear data returned during search with no data
- **(internetForm)**: add field to model
-  edit response data
- **(internetForm)**: migrate and enhance data cleaning from model to services
- **(FinesseIntegration)**: Pre-check device state before integrating to CRM
- return _id
-  change to get all data
-  change GET method to POST
- **(Condition Assign To)**: [#BUCRM-1672] UserRoleProfile/user
- **(TenantConfiguration)**: [#UCRM-1408]: Monitoring package tenant
- action update in workflow firsttime
-  add "type": "text" in constants.py
- **(`STANDARD_QUICK_FILTER`)**:  add "type": "text" in constants
- bump-version
- **(`quality_management_quick_filter`)**:  unable to load list view qm
- **(celery)**: disable feed queue if multiple queue celery option is off
-  field_mapping no value
- **(`get_qm_fe_utils` and `STANDARD_QUICK_FILTER`)**:  constant is changed on callback
- **(`get_all_profile_picture` and `view_all_profile_picture`)**:  Show profile picture

### Chore

- **(InternetForm)**: add field to model
-  fix code style
-  fix code style
- **(InternetForm)**: filter active form
- **(CalabrioIntegration/services)**: [#UCRM-1503] Sync QM fields from old...
- **(CalabrioIntegration/services)**: [#UCRM-1503] Sync QM fields from old Interaction to New Interaction
- **(Finesse)**: Add api for disconnect extension
- **(Finesse)**: Remove old user session
- **(Finesse)**: Remove old user session
- **(Finesse)**: Add confirmation dialog
- update docker build
- **(Finesse)**: Add dynamic extension feature

### Features

- **(Quality Management)**: [#UCRM-957] Return Mail Body
- **(Quality Management)**: [#UCRM-957] Update create index
- **(Quality Management)**: [#UCRM-969] Update Form QM
-  add api get-qm-fe-utils
-  QM quick filter for Custom View
-  Show profile picture
- **(Form)**: [#UCRM-963] On Off QM tenant

## 2.41.1 (2023-06-27)

### Bug Fixes

- add Default_Email_Config in clone-tenant
- **(ObjectStandardization)**: [#UCRM-436] add field is_deleted in object standard
- **(Object)**: [#UCRM-436] disable permissions in object-standard
- **(Object/service)**: [UCRM-408] Re-optimize search in Listview
- can not role with inactive user
- api lod all role

## 2.41.0 (2023-06-22)

### Bug Fixes

- **(EmailRoot)**: remove required validation
- **(Ratelimit)**: Patch is_ratelimited function to avoid Uncaught Exceptions
- [#UCRM-436] remove field in NSTDUserAllowField object standard
- **(ObjectStandardization/service)**: UCRM-436: change content Mapping field
- bug use_ic:null in check_token
- **(Email)**: [#BUCRM-1526] replace tags issue
- clone setting Object standard when clone tenant
- **(Swagger)**: Include the static root when enabling the  swagger options
- **(InternetForm)**: Normalize file extension before check it
- **(KnowledgeBase)**: [#BUCRM-1612, BUCRM-1605] Missing mapping number fields
- update modify_time, modify_by when sync data object standard
- add object_standard
- **(Approval)**: Reject email not working
- **(Email)**: can not send with alias
- **(Object/services)**: [#BUCRM-1638, #BUCRM1637]: add permission in get_component_detail
- **(Email)**: Email reply not in loop
- update get_user_details
- **(Report/utils)**: [#BUCRM-1629] Time range filter Last n days
- **(ObjectStandardization)**: [#UCRM-436] setting object standard


### Chore

- **(TenantConfiguration/views,service)**: [#UCRM-1408\] add api monitoring package
- **(Celery)**: Store failed task results
- **(InternetForm)**: remove json body
- WIP

### Features

- **(Tenants)**: [#UCRM-1322] Setup default email outgoing for tenant
- **(ObjectStandardization)**: [#UCRM-436] User standard object sync

## 2.40.0 (2023-06-13)

### Bug Fixes

- wf update record not run
- missing request in wf first-time
- **(ActionUpdatTarget)**: Provide request to each action to avoid old features have no att request
- **(ActionUpdatTarget)**: Wrong user execution
- **(SearchManagement)**: [#UCRM-1335] Drop Index Search Management
- **(Action)**: fix init action error
- **(UCRM-1288)**: add LOGIN_FAILED_EXPIRATION_TIME in .env
- **(TenantConfiguration/indexing_generate)**: indexing-api
- security-checklist
- reindex
-  fix security-checklist
- [Security] Fix issue Username Enumeration via Login Function
- **(celery)**: upgrade version of rebeat to avoid locl not relesase
- **(UserRoleProfile/user)**: [#UCRM-1233] validate username, password in login

### Chore

- Improve swagger implement
- disable clear user session when starting project
- add default value to STATIC_PATH
- **(get_column_names_pipeline)**:  add encrypted field
- add api to debug scan email feature
- refactor code
- **(user/get-user-assign-record-to, get-all-new-v2)**: [#UCRM-1245] [Security] Limit user's information in APIs
- **(UserRoleProfile)**: [#UCRM-1245] (security-checklist) add api load_all_user

### Features

- **(InternetForm)**: add attactments handler in public form

## 2.39.0 (2023-06-01)

### Bug Fixes

- **(Knowledgebase)**: fix the issue that filtering for expired date is incorrect
- **(Email)**: fix issue mapping field datetime
- **(Email)**: Can not display image that scanned from iphone mail app
- **(Knowledgebase)**: the default search api not working in KB component
- **(Knowledgebase)**: the default search api not working in component
- **(KB)**: wrong replacement fix
-  rename and fix bug
-  scan component campaign
-  name function and constants
-  root_user is None
- add link_api_ic in check_token

### Chore

- add timeout to els
- add default value to generate datetime range func
- **(KnowledgeBaseEnhancement)**: improve search feature.
- add debug media path
- improve swagger generator
- Add DJANGO_ALLOW_ASYNC_UNSAFE to prevent error from async_to_sync function

### Features

-  add check and auto create campaign task and campaign member

## 2.38.1 (2023-05-29)

### Bug Fixes

- indexing field id when clone tenant
- **(ListView/views)**:  add time_range_filter in update custom-view
- **( ExposeAPIs/views)**: test get_expose_api_check_id

## 2.38.0 (2023-05-25)

### Bug Fixes

- update empty field in dynamic-button
- format fild name in upload_file with exposeapi
- update empty field in dynamic-button
- edit field_value_conversion with field number
- **(Email)**: bug when scan email
- **(Calendar)**: Check description whether it has value or not, then do clean_html to avoid error
- security upload-file
- indexing create object
- security upload-file
- add constant in dynamic-button
- dynamic-button add field required
-  Use same Custom view for Web and Mobile but the display fields are different.
- task does not sending to celery
- dynamic-button add field required
-  api campaign task and campaign member
-  show fields in custom view

### Chore

- **(ExposeAPI)**: enable send task to celery from batch crud
- **(Email)**: format value of number field with commas in email template
-  load details of mobile
-  create and update customview of mobile
-  api mobile

### Features

-  API to return all Campaign Member and Campaign Tasks by Campaign ID
-  edit code after review
-  API to return all Campaign Member and Campaign Tasks by Campaign ID
-  update audience custom view in mobile load details
-  api load-all-custom-view for load-all-custom-view

## 2.37.0 (2023-05-23)

### Bug Fixes

- remove cache load_custom_view_pagination
- **(security-checklist(10))**: check view Agent-monitor
- **(security-checklist(13))**: check view logs import users
- **(security-checklist(13))**: check upload-file
- valid user check
- **(UserRoleProfile/profiles)**: security-checklist(11) view_profile
- add authen_type in decode_token
- **(Campaign)**: [#BUCRM-1418] Fix Duplicate Members and Wrong Status
- **(Campaign)**: [#BUCRM-1418] Duplicate Member and Wrong Status
- **(service/object)**:  indexing object_logs
- **(object/service)**:  add index record_id in object_logs
- add indexing in field id when create object
- logs-record

### Chore

- downgrade flake8 version due to conflict with python 3.8.0
- **(Email)**: handle date & datetime field mapping in scan email feature
- **(Email)**: change mapping value schema from string to optional(str,int,float)
- Merge Dev
- **(KBE)**: revert original content because of missing style tags, FE will handle remove dangerous tag
- update commitizen
- Merge Dev
- Improvement base code
- Merge Dev
- **(LogsHistory/views)**: [#UCRM-844] add api total-logs, index object_logs field: record_id

### Features

- **(WfFirstTime)**: refactor flow to improve performance

## 2.36.0 (2023-05-19)

### Bug Fixes

- remove time-range-filter in MULTI_DETAILS
- Remove dangerous html tag to avoid xss attack
- time-range in load pagination
- escape content in notfication to avoid xss attach
- Remove jwt verification for temp information
- add tenant_id in func check_id_record
- exposeapi-check
- get folder id
- remove conversion !r in get_folder_id
- visit group
- **(Interaction)**: remove return statement from finally block
- remove TB_CAMPAIGN in _get_all_setting_collections
- add use_ic in api check_token
- time-range in Consolidated view setting
- update
- add input field exposeapi-check
- **(FinesseIntegration)**: Fix transferred call not create record from interaction
- bump-version
- time-range-filter in Consolidated view Component
- Improve performance of Tags and Table Component by using indexes and apply time range filter
- time-range-custom-view
- Apply time range filter for custom view

### Chore

- **(Interaction)**: Add api to Get the latest interactive agent that interacts with a specific phone.
- **(Object/service)**: [#UCRM-856] time-range-filter in custom-view
- **(.env)**: enable celery multiqueue

### Features

- **(Chart)**: [#UCRM-936] New Chart

## 2.35.4 (2023-05-15)

### Bug Fixes
- can not select linking field value
- update exposeapi-check
- **(ExposeAPIs/services, Popup/models)**: exposeapi-check
- **(ExposeAPIs/services, Popup/models)**: UCRM-1035 add check_authentication exposeAPI Check
- update custom-view when clone tenant
- can not load linking-field-value
- **(Popup/views, ExposeAPIs/service)**: UCRM-1035 - add authentication rule in ExposeApi check
- can not load linking-field-value
- **(DynamicButton/service)**:  remove custom_view in dynamic button update display field
- g-suite workflow
- bump-version 2.35.3 (2023-05-09)
- review code
- after review code
- Custom admin Template File

### Chore

- **(InternetForm)**: add the is_phone_number key to fields mapping in internetform config
- **(InternetForm)**: change the triggering_answer from String to Optional
- added conditional field display setting in internet form configuration

## 2.35.3 (2023-05-09)

### Bug Fixes

- starttime format in new fineese
- duplicate ticket
- **(TenantConfiguration/service)**: [#UCRM-886] [Clone Tenant] Allow to clone Report, Custom View, Dashboard and Form setting when clone tenant
- **(ListView/views)**: BUCRM-1521 Cannot un-default shared custom view
- send_notification when import file
- **(tenant/views)**: [#BUCRM-1517] add Package edition clone tenant
- notification in limited-tenant
- missing params in third-party-api
- set notification and send_email when allow_warning and 100%
- send_notification in limited-edition
- convert search_text-global_search
- format_data_with_tenant_config_global_search
- **(dynamic-button)**: remove field readonly
- can not get user status c247-cloud
- update file changelog
- **(dynamic-button)**: add field required in button_details
- **(Campaign)**: [#BUCRM-1401] Fix Generate SMS Task and SLA, Workflow
- limited-edition root send  email
- can not get token c247-cloud
- limited-edition
- reset all config when sync data from c247-cloud
- **(KnowledgeBase)**: The default knowledgebase component cannot be loaded due to an unhandled query string of numerical type.
- run dynamic-button error update field value
- **(Campaign)**: [#BUCRM-1401] Fix SLA and Work flow
- can not update 3rd setting after sync
- update field dynamic-button
- can not sync data with c247-cloud
- viewLog owner Export share
- can not sync data c247
- **(Campaign)**: [#BUCRM-1401] Fix SLA and Work flow
- BUCRM-1368 linking-field
- **(Campaign)**: [#BUCRM-1401] Fix Generate SMS Task
- remove unused paramter
- api sycn data from c247 cloud
- custom admin tenant
- remove tenant_id from c247 cloud
- dynamic-button
- custom admin root

### Chore

- **(KnowledgeBaseEnhancement)**: add option to get all articles pertaining to the subcategory.
- **(KnowledgeBaseEnhancement)**: add category name to cache query
- **(ExposeAPI)**: update preview payload
- **(Finesse)**: Refactor code & Feature enhancement
- **(KnowledgeBaseEnhancement)**: add category to the get public articles api
- **(ExposeAPI)**: add batch update, batch create configurations
- **(KnowledgeBaseEnhancement)**: add category name to search article query
- **(ActionCallAPI)**: Add no-auth option in call api action
- **(Finesse)**: Log output improvement
- **(Finesse)**: Log output improvement
- **(Finesse)**: Handle transfer call interaction
- handle upload file
- merge code from Develop
- **(UploadFile)**: remove space in filename, handle upload file duplicated

## v2.35.2 (2023-04-19)

### Bug Fixes

- validation field file
- limited-edition
- dynamic-button
- dynamic-button
- **(Campaign)**: [#BUCRM-1485] Fix Generate Task Campaign
- **(Campaign)**: [#BUCRM-1485] Fix Generate Task Campaign
- limited-edition
- limited-edition
- limited-edition
- dynamic-button
- dynamic-button
- limited-edition
- conflicts
- conflict code
- clone-tenant
- **(Campaign)**: [#BUCRM-1485] Fix Generate Task Campaign
- dynamic-button
- **(InternetForm)**: not return data after check linking data
- **(Dynamic Button)**: update dynamic field before running dynamic button
- can not get date of related
- fix conflicts
- limit edition
- fix conflicts
- fix conflicts
- **(import_file, create, Workflow, Dynamic button, Exposing API create)**: Allow Root Admin to set Object records Limits for each Tenant.
- **(Campaign)**: [#BUCRM-1485] Fix Generate Campaign Task
- **(Campaign)**: [#BUCRM-1485] Fix Generate Task Campaign
- return data if no encrypt field
- limited-edition
- limited-edition
- Allow to clone Global Search config and Object indexes when cloning a Tenant
- **(Campaign)**: [#BUCRM-1485] Fix run campaign not generate Task
- **(Campaign)**: #BUCRM-1485 Fix Campaign Task
- Allow to clone Global Search config and Object indexes when cloning a Tenant

### Chore

- **(Common)**: remove lock hanling in class
- **(Common)**: Fix the db singleton design
- **(InternetForm)**: Enable the functionality to get active configs

## 2.35.2 (2023-04-19)
### Bug Fixes

- can not insert record
- **(Finesse)**: resolve update config issue
- **(Finesse)**: resolve update config issue
- can not update record with type file
- **(Finesse)**: remove the singleton design pattern to prevent unapplied updates...
- **(Finesse)**: resolve call duration issue
- **(Finesse)**: add the identify phone prefix to refactor phone number
- **(Finesse)**: remove the singleton design pattern to prevent unapplied updates from the configuration.
- health_check_interaction
- not show report when have no field encrypt
- not show report when have no field encrypt
- update_owner_interaction
- can not trigger record wf call
- **(Email)**: Convert plain text tag to html tag in email body
- **(Email)**: Convert plain text tag to html tag in email body
- add user_id in export-user
- add user_id in export-user
- format time in component_detail
- total record in report
- total record in report
- total record in report
- total record in report
- health-check-interaction
- add api health_check_interaction
- bump-version
- update code
- restructuring code template record

### Chore

- **(InternetForm)**: add additional fields in model
- **(InternetForm)**: add additional fields in model
- **(InternetForm)**: add additional fields in model
- **(WFUpdate/Create)**: Map linking field via owner or rp-to of owner in current record
- **(WFUpdate/Create)**: Map linking field via owner or rp-to of owner in current record
- **(InternetForm)**: Enable the functionality to search and append linking...
- **(InternetForm)**: Enable the functionality to search and append linking data to submitted data, provide the option to retrieve field values upon user submission, and allow for the selection of a submit data owner.
- **(KBE)**: Enable the replication of settings to other tenants.
- code improvement
- **(Finesse)**: block direct signal if the app has not been configured
- block direct signal if the app nhas not been configured

## 2.35.0 (2023-04-06)

### Bug Fixes

- export data with linking
- can not decryt data in list-view-with-details
- wf update record
- can not run wf update record
- load total_records
- update-record
- time-range-report(last quarter, this quarter, last n year)
- can not create record from IC
- decrypt data cti call
- can not show interaction record in c247
- root system can not edit user
- can not load data in component table:
- **(Object)**:  Fix constants issues
- can not load related record
- add constants in listview
- update modify_time when updating custom view
- missing userId in interaction object
- default custom view
- decrypt report data
- **(ScanEmail)**: remove spawns child future thread
- **(ScanEmail)**: remove spawns child future
- **(InternetForm)**: remove encrypt request data
- decrypted data when load linking field value
- can not get agent monitor when have custom-admin
- decrypt data when import
- can not udpate record when not have schema
- not decrypt data when merge record
- can not merge record with type formula
- **(ExposeAPI)**: variable is not assignment
- duplicate rule in wf
- duplicate rules in Workflow
- load total record in report
- can not load component details
- create index of meta fields when creating object
- convert from float to int
- **(Report, Chart, Widget)**:  Allow Time Range Report for Chart and Widget
- **(Object)**:  Fix issues when check is_indexed for meta fields
- **(Report)**:  Fix Issues when genenrate data for time range report
- **(Object)**:  Allow to show which field is indexed when view all fields & permission
- **(Object)**:  Fix issues due to refactoring code
- **(pylint)**:  Remove R0401: Cyclic import in pylint ignore
- **(Object, Report, SMS, TenantConfiguration, SMS, ThirdPartyAPIs, Campaign, CRMConstants, ExposeAPIs, FormulaField, KnowledgeBaseEnhancement, ListView, LogHistory)**:  Move all Meta fields information to CrmMetaFields
- **(Report)**:  Allow using time range report (WIP)
- **(Report)**:  Allow to apply time range filter (WIP)
- **(Report)**:  Show time-range-filter when getting report info (WIP)
- **(Report)**:  Time range filter for report (WIP)

### Chore

- change approval logging message level to debug
- change approval logging message level to debug
- Merge remote-tracking branch 'origin/Develop' into feature/scoring-calabrio
- Add scan call scoring to celery
- update gitignore
- WIP
- WIP

### Features

- **(CallScoring)**: Implement feature call scoring
- **(Report)**:  Apply Time Range Filter for Report Detail and Pagination (WIP)

## 2.34.6 (2023-03-29)

### Bug Fixes

- **(ExposeAPI)**: Can not update contact via IC webhook
- **(ExposeAPI)**: Can not update contact via IC webhook

## 2.34.5 (2023-03-29)

### Bug Fixes

- can not load list-view
- can not load list-view
- can not load data in consolidated-view:
- can not load consolidated-view
- can not load consolidated-view type table, tab
- can not load kanban
- can not load consolidated-view
- can not load data in consolidated-view
- get_user_details mobile
- can not encrypt data when update
- error when decrypt data
- add api get_user_details mobile
- **(Email)**: Change the received date in email parsing function
- **(Email)**: Change the received date in email parsing function
- **(Celery)**: delete task prefix leads to a KEY error in Celery
- **(Celery)**: delete task prefix leads to a KEY error in Celery
- **(Email)**: The subject of emailcontain None value
- can not write interaction for sms
- check null when create object interaction
- can not update expose api create
- delete multiple records in recycle_bin
- replace aggregate to find in recycle bin
- **(Object/field)**: setting page title prints multiple objects
- **(ThirdPartyApis)**:  Allow to show details by section and enable listview details in type Table
- **(ThirdPartyApis)**:  Allow to show details by section and enable listview details in type Table

### Chore

- note known issues in changelog
- note known issues in changelog

## 2.34.4 (2023-03-21)
### Known Issues
- Task prefix leads to a KEY error in Celery. 
### Bug Fixes

- can not map extension transfer
- can not update no-answer status
- duplicate interaction
- duplicate interaction
- duplicate interaction
- duplicate call
- missing source interaction id
- update password fineese
- missing interaction id
- error import
- error import
- can not load details
- add api pin, unpin report ffa
- update mobile setting ffa
- issue decoding email with ascii
- **(logging)**: filter sensitive information
- duplicate interaction
- **(ExposeAPI)**: remove key has value equal '' in payload
- issue decoding email with ascii
- duplicate expose api path
- **(Mobile/service)**:  setting mobile ffa
- login ic with agent_admin
- login ic with agent_admin
- login ic with agent_admin
- limit in duplicate rules
- duplicate rule condition in merge_record and import_file
- sharing in custom-view
- remove condition in mass_edit duplicate rule
- save configuration information without affecting password
- duplicate rule condition
- add func mobile ffa
- duplicate rule in mass_edit
- duplicate rule in mass_edit
- sharing custom-view
- **(AdvanceConfigCTI, FinesseIntegration)**: update settings without entering password
- **(Email)**: The subject of email does not include TicketID
- **(ActionCallAPI)**: force return the same value
- duplicate rule condition
- duplicate rule condition
- duplicate rule condition
- duplicate rule condition
- duplicate rule condition
- update duplicate rules condition
- **(object/duplicate_rules)**: duplicate rules condition
- **(celery)**: Lock isn't deleted if task killed by hard-time limit
- **(object/duplicate_rules)**: add duplicate rule condition
- **(FinesseIntegration)**: change method to check HA
- **(FinesseIntegration)**: change method to check HA
- **(AgentMonitor)**: add ttl index to remove user activities logs
- **(SLA)**:  Fix calculating issue when recalculate milestone after pending
- **(AgentMonitor)**: re-fetch user status when calling get list
- **(SLA)**:  Fix calculating issues
- **(ActionUpdatTarget)**: Can not update record if target object link more than one source object
- **(ActionUpdatTarget)**: Can not update record if target object link more than one source object
- **(Email)**: keep the same owner in update record process (reply-email-flow))
- **(Email)**: keep the same owner in update record process (reply-email-flow))
- **(Email)**: fix checking imap connection issue, add rate limit to manual scanning email api
- **(Email)**: fix checking imap connection issue, add rate limit to manual scanning email api
- **(SLA)**:  Fix Pending Issues
- **(SLA)**:  Fix Pending Issues

### Chore

- refactor logging
- refactor logging
- Enable check permission on api load list view
- Temporarily disable the multi-queue for the exposed API.
- merge code from Develop
- **(KnowledgeBaseEnhancement)**: add api public article
- **(Celery)**: add lock expiry
- **(InternetForm)**: add api submit internet form
- **(ExposeAPI)**: WIP
- **(ExposeAPI)**: WIP
- **(ExposeAPI)**: WIP
- **(ExposeAPI)**: WIP
- **(ExposeAPI)**: WIP

## 2.34.3 (2023-03-09)

### Bug Fixes

- EOF

## 2.34.2 (2023-03-06)

### Bug Fixes

- **(SLA)**:  Refactor code when calculate SLA milestone
- **(SLA)**:  Refactor code when calculate SLA milestone
- **(SLA)**:  Fix wrong deadline issues when reopen a pending SLA
- **(SLA)**:  Fix issue when SLA is pending but still send Alert Email
- **(celery)**:  open the scanner delete records
- **(Swagger)**: The Swagger view cannot be rendered if the request method is GET...
- **(Swagger)**: The Swagger view cannot be rendered if the request method is GET and includes a request body.
- interaction ic not show in new timeline
- missing type in email interaction
- can not get link recording
- can not show interaction
- stop scan delete record
- time scan delete record
- time scan delete record
- time Scan Delete Record
- time Scan Delete Record
- time Scan Delete Record
- **(Object/consolated_view)**: add field WITH_DETAILS in Consolidated view setting(tags, table)
- **(celery)**:  edit record sweep time
- **(Campaign)**:  Fix API method for Mailchimp webhook
- **(celery)**:  edit record sweep time
- **(celery)**:  edit record sweep time
- can not show interaction in component sms
- **(Mobile)**:  add total_email in get_all_email mobile
- can not get related account
- **(CallCenter/service)**: add global search in call-center
- **(Object/models)**:  add field with_details in Consolidated view setting (tags, table)
- can not update start-time, end-time in c247
- **(FinesseIntegration/services)**:  call-finesse
- **(FinesseIntegration/services)**:  call-finesse
-  call-finesse
- **(FinesseIntegration)**:  query search in func push_finesse_event_to_websocket
- **(FinesseIntegration)**:  query data in func push_finesse_event_to_websocket
- **(Mobile)**:  add api get-sms, get-email on mobile
- edit file chanlog.md

### Chore

- **(InternetForm)**: Add more fields in model

## 2.34.1 (2023-02-23)

### Bug Fixes

- wf create interaction
- auto assign record for object interaction
- auto assign record for object interaction
- auto assign record for object interaction
- **(KnowledgeBaseEnhancement)**: bugfixes
- **(KnowledgeBaseEnhancement)**: bugfixes
- **(.env)**: Change ELS environment
- **(AgentMonitor)**: display wrong user status after filter
- call-center interaction
- flow create interaction
- interaction details
- interaction object
- interaction object
- **(Object/object)**:  Returns null when custom_view is not found
- consolidated-view
- consolidated-view
- can not load data of component muti-detial
- **(Object/field)**:  remove field owner in api load_page_title
- bug BUCRM-1243
- import error
- **(Interaction)**:  Fix issues when display new interactions
- **(AgentMonitor)**: display wrong user status after filter
- **( Object/field)**:  add OPTIONS_NUMBER in field type Number
- **(Email)**: fix email interaction not stored
- **(SLA)**:  Fix SLA Old Data Issues
- **(SLA)**:  Fix SLA Old Data Issues
- missing object_id in interaction
- **(SLA)**:  Fix issue for old data
- **(SLA)**:  Fix issue for old data
- **(Email)**: Alow send email from default config of another object
- **(Email)**: Alow send email from default config of another object
- **(AdvanceConfigCTI,finesse_config)**:  return field in api get_config_object_call
- **(UserRoleProfile)**:  add filed object_call in get_user_details
- **(AdvanceConfigCTI/finesse_config)**:  add api get_config_object_call
- **(FinesseIntegration)**:  add filed (popup_contact, object_to_call) in setting_advance_config_finesse
- **(AdvanceConfigCTI)**:  add field (popup_contact, object_to_call) in setting ConfigCTI
- **(Object/field)**:  add api load_page_title
- **(Object/field)**:  add api load_page_title
- **(Object/field)**:  add api load page title
- **(RecycleBin)**:  restore record in recycle bin
- **(Email)**: Add try except block when fetching list mailbox
- **(Interaction)**:  Fix issues when load new interactions

### Chore

- **(InternetForm)**: Add more fields in model
- **(InternetForm)**: implement toggle configuration feature and add more fields in model
- **(InternetForm)**: add fields to model
- **(InternetForm)**: add fields to model
- **(AgentMonitor)**: add the user status when the first time connected to socket
- **(AgentMonitor)**: add the user status when the first time connected to socket
- **(InternetForm)**: Fix Nested field in models
- **(InternetForm)**: Fix Nested field in models
- **(InternetForm)**: WIP
- **(User)**: Add the validity period of password to api check-token
- **(KnowledgeBaseEnhancement)**: implement re-index feature
- **(KnowledgeBaseEnhancement)**: implement re-index feature
- merge code from Develop

### Bug Fixes

- remove generic api key

## 2.34.0 (2023-02-15)

### Bug Fixes

- **(SLA)**:  Fix issues when sending alert email
- **(SMS)**: Set default sender to user root if no user_id is specified
- **(SMS)**: Set default sender to user root if no user_id is specified
- **(SLA)**:  Fix issues when sending alert email
- **(Email)**: Change the user create approval record to root user
- **(Email)**: Change the user create approval record to root user
- api load linking-field-value
- **(SLA)**:  Use string format for modified time
- **(SLA)**:  Use string format for modified time
- can not update cti config
- **(SLA)**:  Fix modified date issues when calculating SLA
- can not update user-cti setting
- api insert record
- change in mapping field config
- use contants value
- **(UserRoleProfile)**:  return [] when login IC failed
- **(SearchManagement/services)**:  limited results returned 200 record in global search record
- **(Celery)**: disable test options
- **(Tenants)**: Add missing params to UpdateTenantConfiguration model
- **(Email)**: Transform the base task into a singleton task, raise an exception in the event of a duplicate task, and extend the timeout to 180 seconds for sending emails via Outlook.
- **(SearchManagement)**:  limit global search 100
- **(SearchManagement)**:  limit global search 100
- **(IC)**:  IC integration
-  add login agent admin ic
- **(UserRoleProfile)**:  login ic agent admin
- **(UserRoleProfile/user)**:  Ic integration
-  ic-integration
- **(SearchManagement/services)**:  returns [] when timeout global search
- **(Interaction)**:  New API to get list of new Interactions (WIP)
- **(SearchManagement/(services,views))**:  Add global search API
- **(UserRoleProfile/user)**:  add is_administrator_ic in login ic
- **(Interaction)**:  New Api to load all Interactions in the new component.
- **(UserRoleProfile/user)**:  add use_ic field on login
- **(Interaction)**:  Apply Custom Admin for Interaction Setting
- **(SearchManagement/views)**:  add permission object in global search
- **(SearchManagement/service)**:  global search
- **(Interaction)**:  API to deactivate Interaction Mapping
- **(Search Management)**:  Show which field is indexed when viewing search management
- **(Search Management)**:  Display index fields only when viewing Tenant Object Search Management
-  add tenant_id_ic in login_ic
- **(SearchManagement/views)**:  add api global_search
- **(SearchManagement/view)**:  add api global_search
- **(User)**:  API login IC from CRM
- **(IC)**:  add constant in IC-integration
- **(Search Management)**:  API to get Object Search Management at Tenant Level
- **(Search Management)**:  Fix issues when remove all searchable fields
- **(Search Management)**:  Allow to force edit the list of searchable fields.
- **(Search Management)**:  API to use global search (WIP)
- IC constants
- **(IC)**:  add send data ic to socket
- **(SearchManagement)**:  Fix issues when remove a searchable field
-  add info user send data socket
- **(Search Management)**:  Fix issues when On/Off Global Search
- **(middlewave)**:  send send data to socket
- **(IC)**:  IC integration
- **(Search Management)**:  Fix issue when search all tenant objects
- **(Search Management)**:  API to toggle global search and update search management (WIP)
- **(Search Management)**:  API to get all Tenant Objects (WIP)
- **(IC)**:  IC integration
- **(IC)**:  IC integration
- **(IC)**:  IC integration
- **(Search Management)**:  API to edit Searchable Fields (WIP)
- **(Email)**: Correct the datetime when dispatching an email.
- **(Search Management)**:  Apis for global search (WIP)
- **(Email)**: the email type argument in the function get email service is incorect
- **(Report)**:  Show decimal places in report info
- **(Report)**:  Show decimal places in report info
- **(FinesseIntegration)**: keep response data
- **(Object/field)**:  add DECIMAL_SEPARATOR in FORMULAR_FIELD type number
- **(Object/field)**:  add DECIMAL_SEPARATOR in field number
- **(SMS)**: parse the response to str instead of json
- can not get token from 3rd-api
- can not load api get token
- **(Email)**: WIP
- **(Approval)**: Add _id to the update api
- **(Approval)**: Add _id to the update api
- can not search special character
- can not search special character
- wrong position component table
- **(Approval)**: Add config_id to the delete api and add object_name to the api get list
- **(Approval)**: Add config_id to the delete api and add object_name to the api get list
- **(mongodb_query_utils)**:  add DELETE_TIME, USER_DELETE in META_FIELDS
- params call API 3rd
- Check the file does not exist in the record

### Chore

- **(User)**: increase login failed attempts for old tenants
- **(User)**:  Elevate the ACCESS_TOKEN_EXPIRED_TIME to 8 hours and integrate a feature to determine the expiration time of a password.
- **(User)**:  Elevate the ACCESS_TOKEN_EXPIRED_TIME to 8 hours and integrate a feature to determine the expiration time of a password.
- **(UserStatus)**: add agent_name and authen_type to api get user status
- **(UserStatus)**: change default values of IC status
- **(User)**: Force change password in the first login
- **(User)**: Refactor the code for managing users status.
- **(Email)**:  Refactor email code style

### Features

- **(User)**: implement the capability to change password upon initial login.
- **(User)**:  Add configuration on tenant root
- **(Email)**: Bugfixes issue
- **(Email)**: Can not get record id from draft email
- **(RefreshToken)**: Add the config to example.env
- **(RefreshToken)**: Change the default expiration time of access tokens.
- **(RefreshToken)**: add the capability to distribute refresh tokens.

## 2.33.0 (2023-01-17)

### Bug Fixes

- **(VoiceBiometricIntegration)**: turn off validation on the password field
- **(VoiceBiometricIntegration)**: turn off validation on the password field
- **(FinesseIntegration)**: turn off required fields in the RecordingCall model
- **(FinesseIntegration)**: turn off required fields in the RecordingCall model
- **(FinesseIntegration)**: turn off required fields in the RecordingCall model
- **(FinesseIntegration)**: turn off required fields in the RecordingCall model
- **(SLA)**:  Fix Issue when trigger SLA actions
- **(SLA)**:  Fix Issues when generate SLA Milestones
- (ExposeAPI[UCRM-399] skip additional_validate_setting in ExposeAPI(upload_file, view_file, delete_file))
- **(SLA)**:  Fix issue cannot Alert via Email
- edit conflict code
- (ExposeAPI [UCRM-399] add api upload_file, view_file, delete_file)
- **(CallCenter)**: Remove password props when return data
- **(CallCenter)**: Remove password props when return data
- **(SLA)**:  Refactor code and add API to toggle SLA Notification.
- **(UserStatus)**: Can not search user by group
- **(UserStatus)**: Can not search user by group
- **(SLA)**:  Apply init action
- **(SLA)**:  Remove Debugging Code
- **(UserStatus)**: Wrong status
- **(UserStatus)**: Wrong status
- **(ExposeAPIs)**:  add field (field_file, type_upload) in ExposeAPIs upload_file
- **(ExposeAPIs/services)**:  ExposeApi uploadfile
- **(ExposeApi)**:  upload_file with Expose Api Upload File
- **(ExposeAPIs)**:  add ExposeApi(upload_file, view_file, delete_file)
- temp disable custom-admin
- can not show data on tag component
- **(SLA)**:  Fix issues when alert SLA
- **(SLA)**:  Change the way to alert SLA
- **(UserStatus)**: can not store cti status changes
- **(ScanEmail)**: Email not in the same loop
- **(ScanEmail)**: Email not in the same loop
- **(SLA)**:  Change SLA flows
- **(SLA)**:  Check relative SLA instances when create/update a record
- **(SLA)**:  Refactor SLA architecture. Check Pending Status directly when edit record. (WIP)
- **(SLA)**:  SLA Enhancement (WIP)

### Chore

- **(Interval)**: add dynamic issue handling function
- **(UserStatus)**: add custom admin
- **(UserStatus)**: add custom admin
- **(UserStatus)**: add custom admin
- **(UserStatus)**: format status  duration
- **(UserStatus)**: change lookup stage pipeline
- **(UserStatus)**: add finesse, cti, ic status
- **(UserStatus)**: add fullname, avatar to response data

### Features

- **(Approval)**: add approval module
- **(AgentMonitor)**: Add agent monitor features

## 2.32.3 (2023-01-11)

### Bug Fixes

- linking field values
- remove nonesense else
- **(Calendar)**: Add attribute lang=en to html tag to pass sonarq
- **(Calendar)**: Add attribute lang=en to html tag to pass sonarq
- get deleted config
- **(Object/services(get_component_detail))**: [#BUCRM-1074] permission read, write, hidden in Picklist Dependency
- **(Permission)**: share all records if no criteria conditions found
- **(Permission)**: share all records if no criteria conditions found

### Chore

- **(AssignmentRule)**: Set Limit Records Assignment
- **(AssignmentRule)**: Set Limit Records Assignment
- **(ActionCallAPI)**: Parse user field to email instead of id
- **(ActionCallAPI)**: Parse user field to email instead of id

## 2.32.2 (2023-01-05)

### Bug Fixes

- **(ThirdPartyAPIs/services_action_call_api)**:  action call API
- **(Report)**:  set RECORDS_PER_EXPORT_FILE to 50,000
- **(KnowledgebaseEnhancement)**: fix quick search
- **(KnowledgebaseEnhancement)**: add api re-index knowledgebase
- **(KnowledgebaseEnhancement)**: add api re-index knowledgebase
- add connect for old c247
- **(KnowledgebaseEnhancement)**: Auto-Generated plain text from body and store in es
- connect247 express
- adapt old 247
- **(Report)**:  Increase the total records per export file to 100,000
- **(Report)**:  Increase the total records per export file to 100,000
- **(KnowledgebaseEnhancement)**: The knowledgebase component is not affected when updating.
- **(KnowledgebaseEnhancement)**: The knowledgebase component is not affected when updating.
- **(KnowledgebaseEnhancement)**: Ignore None value when searching knowledgebase
- **(KnowledgebaseEnhancement)**: Ignore None value when searching knowledgebase
- **(Email)**: function doesnt run in background
- **(KnowledgeBaseEnhancement)**: Update article information when deleting category.
- Write to Log Import
- Write to Log Import
- add duplicate rule in import file
- workflow with update record

### Chore

- **(KnowledgeBaseEnhancement)**: check tag exist before inserting to db
- **(KnowledgeBaseEnhancement)**: add api to check es service

## 2.32.1 (2022-12-29)

### Bug Fixes

- change default_hotline to optional
- remove try-except in duplicate rules
- wf with cnn247
- return duplicate ID records when blocking
- custom admin template
- bug linking
- edit record lost linking data

## 2.32.0 (2022-12-27)

### Bug Fixes

- **(Object/field)**: BUCRM-869 delete option in field select
- customadmin in duplicate_rules
- remove custom_view mobile
- can not see record-details in consolidate-view
- **(Object/template)**:  change default template
- can not trigger workflow interaction
- **(Email)**: can not store image that have the same cid
- **(Object/template)**: UCRM-378 Create record using a template
- **(EmailSignature)**:  Set up position for all Signatures
- **(EmailSignature)**:  Allow to show signature before quote
- **(UserRoleProfile/profiles)**: [BUCRM-1022] create profile when create object iframe
- **(KnowledgeBase)**: bug fixes
- **(KnowledgeBase)**: bug fixes
- api call-data
- **(UpdateRelatedTargetRecord)**: force update all related fields in the same object related
- **(CallAPI)**: can not parse the meta fields
- mutiple click record on popup
- mutiple click record on popup
- add header type for c247 requests
- **(FinesseIntegration)**: Can not count call start time

### Chore

- **(KnowledgeBaseEnhancement)**: add auth to elasticsearch client
- **(FinesseIntegration)**: mapping sso agent
- **(KnowledgeBaseEnhancement)**: add aticle object selection to kb component
- **(KnowledgeBaseEnhancement)**: Add get article data from component setting  method
- **(KnowledgeBaseEnhancement)**: Add setting to the knowledgebase component
- **(KnowledgeBaseEnhancement)**: Add setting to the knowledgebase component
- **(KnowledgeBaseEnhancement)**: Add setting to the knowledgebase component
- **(FinesseIntegration)**: rename obscure variable
- remove test
- add mapping service
- merge Develope

### Features

- **(Object/template)**: [#UCRM-378] Create record using a template
- **(FinesseIntegration)**: Add user SSO
- **(KnowledgeBaseEnhancement)**: Add the feature that create tag from article
- **(KnowledgeBaseEnhancement)**: Add sort feature
- **(KnowledgeBaseEnhancement)**: WIP

## 2.31.4 (2022-12-19)

### Bug Fixes

- **(Object/object)**: merge_record
- update custom-view
- update custom-view
- **(Report)**: Increase the timeout to check mongodb connection
- **(Report)**: The query to get list users is wrong
- **(FinesseIntegration)**: Can not count call start time

## 2.31.3 (2022-12-15)

### Bug Fixes

- can not search with zero
- **(Check Version)**:  Allow to view version as Markdown
- **(Check Version)**:  Allow to view version as Markdown
- search with number

### Chore

- remove logs
- remove logs

## 2.31.2 (2022-12-13)

### Bug Fixes

- bump-version

## 2.31.1 (2022-12-13)

### Bug Fixes

- **(Object/object)**: [#UCRM-387] Embed iframe in UCRM
- api load linking-field-value

## 2.31.0 (2022-12-12)

### Bug Fixes

- can not search with number
- **(Object/duplicate_rules)**: duplicate_rules in update record
- can not load import_data permission
- **(Email)**:  Allow to store draft email when user compose new email
- **(Email)**:  Set Emaqil Type to 'Draft' automatically when user store Draft Email
- **(Email)**:  Refactor code: Apply Constants for MailBox Collection
- **(EmailSignature)**: [#UCRM-380] Generate signature id
- **(EmailSignature)**: [#UCRM-380] Allow to set default signature

### Features

- **(Email)**: [#UCRM-379] Allow to store, update and remove Draft Email
- **(UserRoleProfile)**:  Email Signature

## 2.30.8 (2022-12-08)

### Bug Fixes

- update duplicate rule in update record
- update duplicate rule in update record
- **(Object/object)**:  merge_record
- **(Object/object)**: [#BUCRM-1003] merge_record
- update duplicate_rule in merge_record
- can not record shared in consolidated-view
- can not delete report
- api get shared report
- format report response
- format report response
- run pre-commit
- run pre-commit
- duplicate_rules in update_record
- duplicate_rules in update_record
- **(Workflow)**: [#BUCRM-992] Fix issue when On/Off Workflow Schedule
- **(Workflow)**: [#BUCRM-992] Fix issue when On/Off Workflow Schedule
- Duplicate in merge record
- pre-commit
- add field 'view' in create, update component
- duplicate_rules in Restore
- (Object/duplicate_rules) in RecycleBin
- import module error
- (Object/duplicate_rules) add object that prints duplicate message [BUCRM-980]
- [Duplicate Rule]: Update, Create record in Workflow
-  run pre-commit
- **(Object/(duplicate_rules, services))**: [#BUCRM-993] [Duplicate Rule] create, update in Workflow
- **(object/duplicate_rules)**: [#BUCRM-990] [Duplicate rule] Error API 3rd
- **(object/duplicate_rules)**:  [Duplicate rule]
- **(duplicate_rules)**: [#BUCRM-986] [Duplicate rule]: Setting duplicate rules
- **(object/duplicate_rules)**: [#BUCRM-989] [Duplicate rule]: setting email 3rd
- **(Object/duplicate_rules)**: [#BUCRM-980] Notice in duplicate
- **(duplicate_rules)**: [#BUCRM-980] duplicate in noti owner
- add report permission
- **(RecycleBin/(services, views))**: [#BUCRM-982] Restore duplicate records on Overwrite/Create
- **(Object/duplicate_rules)**: [#BUCRM-985] fix: duplicate ucrm, 3rd
- **(duplicate_rules)**:  delete rule in duplicate rules
- can not see created-by
- **(requirements)**:  update library greenlet==2.0.1
- **(requirements)**:  update library gevent==22.10.2
- **( requirements)**:  update library gevent
- **(smbproject/celery)**:  add schedule celery in (delete-notification,delete-record)
- **(Object(duplicate_rules, field, models, object, services, url, meta_field, constants))**: [#UCRM-352] Update code Duplicate Rules - Enhancement
- can not clone report
- temporary duplicate rules
- format report data
- format report data
-  code optimization

## 2.30.7 (2022-11-29)

### Bug Fixes

- on/off linking
- on/off linking
- on/off linking

## 2.30.6 (2022-11-24)

### Bug Fixes

- still load data when use disable
- searh in user
- **(Action)**: parse value from datetime fmt
- **(Action)**: parse value from datetime fmt

## 2.30.5 (2022-11-22)

### Bug Fixes

-  update size uploadfile 25M
- **(ScanEmail)**: add mapping field lookup
- **(ScanEmail)**: add mapping field lookup
- **(LogHistory)**:  cannot update records. Cause in compare two records.
- **(LogHistory)**:  cannot update records. Cause in compare two records.

### Chore

- **(ScanEmail)**: add mapping rule for lookup field
- **(settings)**: make simple logging settings
- **(ScanEmail)**: add mapping rule for lookup field

## 2.30.4 (2022-11-17)

### Bug Fixes

- **(ScanEmail)**: add case-insensitive email mapping
- **(ScanEmail)**: add case-insensitive email mapping
- **(Celery)**: remove worker max tasks per child
- **(Celery)**: remove worker max tasks per child

### Chore

- **(Email)**: allow include optionalfields in mapping rule
- **(Email)**: allow include optionalfields in mapping rule

## 2.30.3 (2022-11-15)

### Bug Fixes

- **(UserRoleProfile/user)**:  update token timeout 10h
- can not delete linking field
- consolidate-view can not load related data
- consolidated-view can not load data
- consolidated-view can not load data
- error load object-detail

### Chore

- **(Action)**: parse field variable in condition component
- **(Action)**: parse field variable in condition component

## 2.30.2 (2022-11-10)

### Bug Fixes

-  Bump-version
- api load linking-field-value
- **(Object)**:  Fix issue when Object is removed but still exists in Related Object
- **(Object)**:  Fix issue when Object is removed but still exists in Related Object
- (Report/(charts,widgets))
- **(Report/(charts,widgets))**:  delete chart, widget mobile

## 2.30.1 (2022-11-10)

### Bug Fixes

- **(Report/charts, widgets)**:  comment delete chart, widget mobile
- some bugs
- **(Object)**:  API to get all related target objects
- (Report/(charts,widgets))
- **(Report/(charts,widgets))**:  delete widget,chart mobile
- **(Object)**:  API to get all related target objects
- **(Report/(charts,widgets))**:  delete widget,chart mobile
- some bugs
- **(Object)**:  API to get all related target objects
- **(Reports)**:  Fix Report Issues
- **(Reports)**:  Fix Report Issues

## 2.30.0 (2022-11-09)

### BREAKING CHANGE

- **(Action)**:  resolve cicular-import and add new action
- **(Action)**:  resolve cicular-import and add new action

### Bug Fixes

-  hotfix export report
- **(Reports)**:  Fix Export Report Issues
- **(Reports)**:  Fix Export Report Issues
- **(Action)**: can not add or subtract date
- **(Action)**: can not add or subtract date
- **(Action)**: can not update action in dynamicBTN
- **(Action)**: can not update action in dynamicBTN
- **(Action)**: Ignore to query unactive field
- **(Action)**: Ignore to query unactive field
- **(Action)**: Fix update related-target record on field lookup, user
- **(Campaign)**:  Merge Conflict
- **(SLA)**:  Fix issues when SLA has no escalation rule
- **(Campaign)**:  Fix Campaign Status issues
- **(Campaign)**:  Fix Campaign Status issues
- **(Celery)**: add worker_max_tasks_per_child to prevent memory leak
- **(Celery)**: add worker_max_tasks_per_child to prevent memory leak
-  bump version
-  update

## 2.29.2 (2022-11-08)

### Bug Fixes

-  Bump version
- **(settings)**:  update upload file max size 50MB
- **(Campaign)**:  Create/Remove MailChimp Webhook when Connect/Disconnect MailChimp Account
- **(Campaign)**:  Allow to send SMS from Manual Member
- **(Campaign)**:  Allow to select default SMS Template ID
- **(Campaign)**:  Webhook for MailChimp Campaign
- sharing in mass-edit
- sharing in mass-edit
- add check root user
- missmap between ic and crm owner
- **(Campaign)**:  (WIP) Sync MailChimp Result
- can not load related data

## 2.29.1 (2022-11-03)

### Bug Fixes

-  bump-version
- **(Celery)**: Change scheduler to redbeat
- **(Object/object)**:   add customview_id mobile
- **(FinesseIntegration)**: Can not query user

### Chore

- add function for monnitoring database performance

## 2.29.0 (2022-11-01)

### Bug Fixes

- **(Bump-version)**:  bump-version
- **(ExposeAPI)**: handle errorr
- **(Workflows)**:  Make sure Scheduled Workflow will run all matching records...
- can not update assign-to in wf update releated
- can not update assign-to in wf update releated
- can not update assign-to in wf update releated
- record-per-page from 5 to 50
- **(Workflows)**:  Make sure Scheduled Workflow will run all matching records before updating next_trigger_time

### Features

- **(User)**:  add feature that logging user activities(login & logout & client information)
- **(User)**:  add feature that logging user activities(login & logout & client information)

## 2.28.1 (2022-10-31)

### Bug Fixes

- **(Workflows)**:  Fix Workflow Schedule Issues when next trigger month has only 30 days.
- **(Workflows)**:  Limit total records when running scheduled workflow

## 2.28.0 (2022-10-28)

### Bug Fixes

- **(Version)**:  Bump version
- **(Workflows)**:  Fix Workflow Schedule Spam issues
- **(SLA/sla_scheduler_helper)**:  add category[SLA] in notification
- **(Workflows)**:  Fix Workflow Schedule Spam issues
- **(Mobile/services)**:  update load_data_field_mobile
- **(SLA/sla_scheduler_helper)**: [#BUCRM-800] Notification of SLA on mobile
- **(Mobile/services, Report(charts, widgets))**:  add field is_pinned_to_home on mobile
- **(ScanEmail)**: the related field was wrong

## 2.27.2 (2022-10-26)

### Bug Fixes

- **(ScanEmail)**: the related field was wrong
- **(Kanban)**:  Fix Kanban Pagination issues

## 2.27.1 (2022-10-25)

### Bug Fixes

- **(Kanban)**:  Show page records and uncategorized records when load kanban data
- **(Kanban)**:  Remove record per page and current page when load kanban data
- **(Kanban)**:  Apply new pagination flow in Kanban
- **(Calendar)**:  Correct the incorrect repeat event alert time.
- consolidated-view can not load data
- consolidated-view can not load data
- search with pagination
- search with pagination
- **(Campaign/services)**:  bug export role profile
- **(TenantConfig)**: [#BUCRM-516] Add Dynamic Button, Email Template and SMS...
- **(TenantConfig)**: [#BUCRM-516] Add Dynamic Button, Email Template and SMS Template when clone Tenants
- wf can not update assign to
- wf can not update assign to
- wf can not update assign to
- wf can not update assign to
- wf can not update assign to
- wf can not update assign to
- wf can not update assign to
- dynamic button
- **(Mobile/services, ListView/views)**:  add custom_view for mobile
- can not delete record

## 2.27.0 (2022-10-20)

### Bug Fixes

- **(Object/object.py)**:  add is_default in load_all_custom_view
- changing redis configuraition
- changing redis configuraition
- update function duplicate rules
- **(Campaign)**:  Fix issue cannot send manual Member to MailChimp
- pagination in component
- pagination in component
- **(Campaign)**:  Fix Campaign Issues (WIP)

### Chore

- add api for resetting configuration
- add api for resetting configuration
- changing redis configuration
- improve build process
- add health-check api & requirements
-  remove old method for catching data
- add command to execute flower
-  remove old method for catching data
- **(Email)**:  check whether the email is a reply to an existing ticket
- **(Email)**:  check whether the email is a reply to an existing ticket

### Features

- **(Email)**:  Allow the user to select a specific email folder from which to scan emails.
- **(Email)**:  Allow the user to select a specific email folder from which to scan emails.

## 2.26.2 (2022-10-14)

### Bug Fixes

- **(OAuth2)**: close popup when user is authenticated
- **(OAuth2)**: close popup when user is authenticated
- wf can not send noti
- update time (Scan Time Delete Notification) in celery
- update REDIS
- update REDIS_HOST, REDIS_PORT, REDIS_USERNAME, REDIS_PASSWORD, REDIS_PROTOCOL in file .example.env
- **(SLA)**:  Turn on all SLA Scanners when check health
- **(TenantConfiguration)**:  Add Id field for old data when convert to ver 2
- notification
- [UCRM-353] add Task Scan Time Delete Notification with celery
- **(Logging)**:  limit size of log file to 20bb
- update constants object/constants
- dynamic button with type user not work
- **(TenantConfiguration)**:  Fix field Id issues when convert to ver 2
- **(Report)**:  Fix issues when run Report Chart Widget on Debian
- **(Report)**:  Fix issues when run Report Chart Widget on Debian
- [UCRM-354] update capacity in uploadfile
- update DATA_UPLOAD_MAX_MEMORY_SIZE=25MB
- login with ldap
- dynamic button with type user not work
- dynamic button with type user not work
- keep email format in login
- keep email format in login
- notification in shared_to
- format formular field
- **(SMS)**:  preventing SMS transmission when the configuration is deleted
- wf can not update related assign to
- Picklist dependency
- [BUCRM-744]target fields automatically turn on all in Picklist dependency
- auto share to user tenant
- format list-view data
- format list-view data
- format list-view data
- **(TenantConfiguration)**:  Fix issues when convert to version 2
- **(Campaign)**: [#BUCRM-721] Update Campaign Status when update Campaign...
- **(Campaign)**: [#BUCRM-736] Apply Mass Delete for Campaign
- **(Campaign)**: [#BUCRM-721] Update Campaign Status when update Campaign Config. Generate member when Campaign changes to In Queue
- related linking field
- related linking field
- **(SLA)**: [#BUCRM-693] Apply Formula Field when run SLA Action
- **(SLA)**: [#BUCRM-693] Apply Formula Field when run SLA Action

### Chore

- **(Setting)**:  refactor redis configuration
- **(Notification)**:  refactor channel consumer
- **(Celery)**: migrate old celery settings to new file

## 2.26.1 (2022-10-07)

### Bug Fixes

- **(Kanban)**: [#BUCRM-695] Use new Decorator for Kanban APIs
- **(Kanban)**: [#BUCRM-695] Use new Decorator for Kanban APIs
- **(IncomingEmail)**: fix wrong datetime format
- linking object
- linking object
- url in manula-sharing
- url in manula-sharing

### Chore

- **(Email)**: refactor old data

## 2.26.0 (2022-10-06)

### Bug Fixes

- add file extension (img, ppt) in uploadfile
- **(Notification)**: limit latest 1000 records
- add file extension .rar in uploadfile
- **(Notification)**: replace sort by created_date to _id to improve performance
- **(Notification)**: replace sort by created_date to _id to improve performance
- update code export_permission_role_system
- custom-view details
- custom-view details
- **(User)**: incorect total page
- **(Notification)**: remove count query due to bad performance
- **(Notification)**: only return call start time if event is 'Answer Call'
- custom-view details
- update action related record
- update action related record
- **(Notification)**: remove count when fetching all notification
- [BUCRM-482]
- [BUCRM-482] update in Picklist source
- **(Campaign)**:  Fix issues when Object has no non-id field
- **(User)**: delete related finesse settings when the user is deleted.
- update message in constants Mobile
- consolidated view can not see record shared by manual sharing
- consolidated view can not see record shared by manual sharing
- lost manual sharing record when update
- can not see record shared by manual sharing
- update
- add api Mobile[ pin_report_home, unpin_report_home, get_report_home]
- can not send noti to group

### Chore

- **(SMS)**: add record_id to get-all-message api
- format log
- disable root permission check
- **(SMS)**:  Add feature that creates  interaction in the function send_sms.
- remove nonsense function logging
- **(SMS)**:  add total records to pagination

### Features

- **(Mobile)**:  [ADD]: Firebase Push Notification.

## 2.25.0 (2022-10-04)

### Bug Fixes

- **(Logger)**:  move logger configuration file to smbproject to avoid an unexpected bug
- **(Report)**: [#BUCRM-654] Fix Middle Name issues
- **(Report)**: [#BUCRM-654] Fix Middle Name issues
- **(Report)**: [#BUCRM-654] Fix Middle Name issues
- can not create action update-related
- can not create action update-related
- can not create action update-related
- can not send noti
- can not send noti
- can not share record
- clear data when select linking field
- clear data when select linking field
- clear data when select linking field
- wf has change can not send notification
- **(MailBox)**: [#BUCRM-570] sort mail message by date instead of _id
- **(CrmImportUsers)**: [#BUCRM-660] can not update user information if the email provided is case-insensitive.
- wf has change can not send notification
- update functionformat_content
- update functionformat_content
- update functionformat_content
- **(Campaign)**:  Show Campaign Running Status when generate Object Campaign
- **(Campaign)**:  Show Campaign Running Status when generate Object Campaign
- **(Kanban)**: [#BUCRM-695] request does not have request_data attribute
- **(SMS)**:  parse recipient of sms outgoing from record
- **(Campaign)**:  Show Campaign Running Status when generate Object Campaign
- search_custom_view[BUCRM-606, BUCRM-645]
- remove raw_content
- add (raw_content and category in function [action_send_notification, create_notification])

### Chore

- rm PKCS7Encoder
- rm PKCS7Encoder
- **(Notification)**: [#BUCRM-691] add method that parse user_id from...
- rm pre-commit
- **(CacheMeoize)**:  add caching condition callable
- **(Notification)**: [#BUCRM-691] add method that parse user_id from user-field to send notification
- **(User)**: [#BUCRM-703] add api that normalize all text in User db to NFC standard

### Features

- **(SMS)**:  add component sms api

## 2.24.0 (2022-09-29)

### Bug Fixes

- **(Mailbox)**:  fix incorrect object_id of MailBox
- **(Campaign)**:   Fix Validate Campaign Datetime Issues
- **(Campaign)**:   Fix Validate Campaign Datetime Issues
- **(Campaign)**:  Fix Issues when editing Campaign Config
- **(Campaign)**:  Fix Issues when editing Campaign Config
- **(MailChimp Integration)**:  Fix issues when connect MailChimp
- **(MailChimp Integration)**:  Fix issues when connect MailChimp
- **(Campaign)**:  Fix Issues when Running Campaign with multiple Recipients
- **(Campaign)**:  Fix Issues when Running Campaign with multiple Recipients
- **(Campaign)**:  Fix issues when sending SMS
- **(MailChimp Integration)**:  Fix issues when run Campaign Tasks with MailChimp
- **(Campaign)**:  Fix issues when scan Campaign Statuses
- **(MailChimp Integration)**:  Store MailChimp Config in ScanCampaign
- **(MailChimp Integration)**:  APIs to get Campaign Content, Campaign List and Disconnect Mailchimp Account
- **(Campaign MailChimp)**:  API to get MailChimp Root Info
- wrong fucntion name
- manual sharing
- manual sharing
- api load linking-field-values
- remove api total_record
- remove api total_record
- can not update field owner in wf
- refactor code duplicate_rules
- disable mutiple in field select
- disable mutiple in field select
- [UCRM-325]-API: Modify current get list notifications api to show Read/Unread/All
- update constants notification
- remove comment export role profile
- duplicate rule with integrated IC
- can not update action in wf

### Chore

- **(Importusers)**: [#BUCRM-583, BUCRM-656] Make the validation error message easier to read.
- **(AssignmentRule)**: decrease scheduler time and increase limited records to 1000
- **(AssignmentRule)**: decrease scheduler time and increase limited records to 1000
- **(conf)**:  remove some stuff
- **(Caching)**:  implement memorize caching
- **(Email)**:  update method to parse email template
-  refactor coding style
- **(Calendar)**: update payload api create-calendar-event
-  update cz config
- config gitignore
- refactor code
- Add monitor performance method

### Features

- **(Campaign)**: [#UCRM-27, UCRM-28, UCRM-257] MailChimp Integration
- **(Campaign)**: [#UCRM-27, UCRM-28, UCRM-257] MailChimp Integration
- **(MailChimp Integration)**:  Get MailChimp Template for Email campaign
- **(MailChimp Integration)**:  API to send MailChimp Member from Campaign Tasks. Close Modal in MailChimp Callback
- **(Workflow)**:  add workflow create calendar event
- **(Mobile)**:  [ADD]: Store device token to Redis.
- **(workflow)**:  add create-calendar-event action in workflow
- **(DynamicButton)**:  add create-event-calendar action in dynamic button
- **(Campaign)**: [#UCRM-257] Campaign Enhancement

## 2.23.4 (2022-09-22)

### Bug Fixes

- update changelog

## 2.23.3 (2022-09-22)

### Bug Fixes

- update duplicate when field ID None
- **(Campaign (WIP))**:  Api to update Campaign Running Status and Configuration
- remove comment code
- **(Campaign (WIP))**:  Fix issue when run Workflow and SLA for Campaign Task
- **(Campaign (WIP))**:  APIs to get Campaign Component data
- linking value
- linking value
- update IconManagementMobile
- update IconManagementMobile
- **(Campaign (WIP))**:   Fix issues when generating and running tasks

### Features

- **(Campaign (WIP))**:  Convert to standard structure when generate Task and Member
- **(Campaign)**:  API to check availibilty of Campaign Feature

## 2.23.2 (2022-09-16)

### Bug Fixes

- can not update interaction details
- can not update interaction details
- can not update interaction details
- linking value

## 2.23.1 (2022-09-16)

### Bug Fixes

- **(ScanEmail)**: remove special character in email subject

## 2.23.0 (2022-09-16)

### Bug Fixes

- **(FinesseIntegration)**: Change method that checking ha of calabrio
- related data
- **(Campaign (WIP))**:  Fix issues when generate and run campaign
- **(Campaign)**:  Refactor code for Campaign and Task Scanner
- add middlename when sync with ldap
- **(Campaign)**:  Generate and Run task for Campaign
- **(Campaign (WIP))**:  Generate Task by Campaign Member
- **(Mobile)**:  Refactor dashboard type and component type.
- **(Mobile)**:  Refactor dashboard type and component type.
- can not load related data
- **(ListView)**: Check not object_id
- **(ListView)**: Check not object_id
- **(ListView)**: Check not object_id
- can not load related data
- linking related record
- duplicate rule
- **(Campaign)**:  Allow to generate member when create or edit campaign
- duplicate rule
- **(Mobile)**:  [FIX]: SlaInstance cannot lookup to Object
- **(Mobile)**:  [FIX]: SlaInstance cannot lookup to Object
- **(Campaign)**:  Add function to validate Campaign Info and Config
- duplicate rule in workflow
- **(getPhoneField)**: filter by object_id
- **(CRITICAL)**: wrong key channel layer
- clean code
- duplicate rule
- merge branch develope
- refactor code
- **(Campaign)**:  Show Repcipients Objects when get Campaign Config
- update .env
- duplicate rule
- **(Mobile/(constants,icon,services,urls,views))**: [#[UCRM-287,UCRM-288,UCRM-290,UCRM-278]] update api Icon Management Mobile

### Features

- **(DbHealthCheck)**: add database healcheck and monitoring slow queries
- **(DbHealthCheck)**: add database healcheck and monitoring slow queries
- **(Mobile)**: [#UCRM-289, UCRM-317] [ADD]: add SLA APIs for Mobile.
- **(Mobile)**: [#UCRM-289, UCRM-317] [ADD]: add SLA APIs for Mobile.

## 2.22.1 (2022-09-13)

### Bug Fixes

- **(AssignmentRule)**: limit records found to improve perf
- **(VoiceBiometric)**: handle exception

## 2.22.0 (2022-09-13)

### Bug Fixes

- remove custom admin checking when update pwd
-  add health check api
-  add logging to assignmentRule
- **(Campaign (WIP))**:  Refactor Code
-  add logging to email scanning service
- duplicate rule in assignment-rule
- **(Campaign (WIP))**:  API to validate campaign recipients objects
- **(CampaignObjectGenerator)**:  Object Generator Services
- **(CampaignGenerator)**:  Add menu_index in ObjectGenerator, Add service for object generator
- load data field mobile
- **(Report)**: [#BUCRM-627] Show 'In words' Property for Formula Field
- **(Report)**: [#BUCRM-627] Show 'In words' Property for Formula Field
- Export role profile
- **(Campaign)**: [#UCRM-257] Generators for Campaign, Member, Task (WIP)
- update export permission role system
- **(ObjectGenerator)**:  GeneratorHelper and StandardObjectGenrator
- update ROOT_EMAIL and ROOT_EMAIL_PW
- can not reset password
- can not reset password
- duplicate rule
- duplicate record in workflow

### Features

- **(Mobile)**:  [ADD]: Add Pin/Unpin APIs for Mobile.
- **(Mobile)**:  [ADD]: Add Pin/Unpin APIs for Mobile.
- **(Mobile)**:  [REF]: Refactor type fields for home screen config.
- **(Mobile)**:  [REF]: Refactor type fields for home screen config.
- **(Mobile)**:  [REF]: Refactor APIs to new database structure.
- **(Mobile)**:  [REF]: Refactor APIs to new database structure.

## 2.21.0 (2022-09-08)

### Bug Fixes

-  importUsers
-  sort email
-  fix assignmentRule & configure advance log
- [BUCRM-604] Duplicate Rule create record in workflow
- add info rule duplicate
- add singleton to task
- update export permission role system
- update file CHANGELOG
- update file CHANGELOG
- export permission role system
- export permission role system
- change name_body mobile
- export role profile

### Features

- **(Mobile)**: [#UCRM-284, UCRM-285] [ADD]: Mobile Components APIs

## 2.20.1 (2022-09-07)

### Bug Fixes

- error in check permission

### Features

- **(Workflows)**:  [IMP]: add more log systems.

## 2.20.0 (2022-09-06)

### Bug Fixes

- add try catch
- **(ScanEmail)**:  add email limit constant
- [UCRM-297]: mobile custom view
- update default load field on mobile
- missing field email in action create record
- missing field email in action create record
- custom-admin
- update custom admin in export role profile
- add custom admin in export permission role system
- add extension section in uploadfile
- **(Notification)**:  change sort-by from created_by to _id to improve performance
- **(ScanEmail)**:  limit email for each scan
- **(AssignmentRule)**:  update get-round-robin-user funtion
- **(ImportUsers)**:  add user merging
- setting custom-admin with profile
- update api export_role
- update role permission
- **(Report)**: [#UCRM-268] Show formula type when get Report info
- add module Mobile
- **(Report)**: [#UCRM-268] Show formula type when get Report info
- add module Mobile
- add API export permission role system
- add API export permission role system
- setting custom-admin with profile
- **(SummaryReport)**: [#UCRM-273] Store Formula Type in Report Measure
- time in celery
- api load linking record
- **(manage.py)**: update env
- **(SummaryReport)**: [#UCRM-273] Store Formula Type in Report Measure
- **(AssignmentRule)**:  update get-round-robin-user funtion
- api load linking record
- update time in celery
- pagination when load linking value
- refactor code
- refactor code
- refactor code
- refactor code
-  add pre-commit command
-  add ignored file
-  change pre-commit hook configuration
- **(logging)**:  refactor log configuration
-  add pre-commit hook
- **(AssigmentRule)**: Refactor coding style
- **(smbproject/Common/constants)**:  update uploadfile
- **((Object/duplicate_rules,object))**:  update duplicate rules add Dialog box
- remove unused import
- **(Object)**:  [FIX]: Can not write linking fields after merge records.
- **(Object)**:  [FIX]: Can not write linking fields after merge records.
- **(Object)**:  [FIX]: Can not merge linking fields for master record.
- **(Object)**:  [FIX]: Can not merge linking fields for master record.
- **(assignmentRule)**:  wrong assign amount per step
- **(assignmentRule)**:  wrong assign amount per step
- **(AssignmentRule)**:  wrong remaining records
- **(AssignmentRule)**:  wrong remaining records
-  disable lib
- **(assigmentRule)**:  change condition filtering record
-  update uploadfile
- **(requirements)**:  remove library magic
- **(requirements)**:  update library magic
-  disable lib
- **(Object/object)**:  update uploadfile
- **(Object/object)**:  Allow file extensions to be uploaded
- **(assignmentRule)**:  update logging and change flow assignmentRule
- **((Object/object, smbproject/Common/constants))**:  Block file types that are not allowed to be uploaded
- **(Object/duplicate_rules)**:  update duplicate rules
- **(SLA)**: [#BUCRM-312] Apply checking workflow 'first time' and 'has change' in SLA actions
- **(RecycleBin/services, Object/(duplicate_rules, object))**: [#UCRM-270] add dialog box in duplicate record
- **(SLA)**: [#BUCRM-312] Apply checking workflow 'first time' and 'has change' in SLA actions

### Features

- **(Mobile)**: [#UCRM-284, UCRM-285] [ADD]: Mobile Components APIs
- **(CustomAdmin)**:  [REF]: Write log system for Profile.
- **(CustomAdmin)**:  [REF]: Write log system for Profile.
- **(Widget)**: [#UCRM-268] Add formula type for Widget Measure
- **(Widget)**: [#UCRM-268] Add formula type for Widget Measure

## 2.19.2 (2022-08-25)

### Bug Fixes

- can set mutiple default custom-view
- can not load related interaction
- **(scanEmail)**:  keep config status is on when config is invalid
- **(scanEmail)**:  keep config status is on when config is invalid
-  sort mailbox by date
- **(importUsers)**:  not show notification when import failed
- **(Object/duplicate_rules)**:  update duplicate rules in restore record
- **(assignmentRule)**:  refactor coding style
-  update logging and assigmentRule feature
- **(Object/object(uploadfile))**:  block invalid files avatar
- api load visible object
- **(ConvertToVersion2)**:  Fix default value issue in workflow
- **(notification)**:  detached session of an user instead of put it all in to one group
- **(Notification)**:  rename push notification function
- **(Websocket)**:  migrate user sessions to specific group instead of put it in one group
- **(Report)**: [#BUCRM-20] [FIX]: share_to_groups of report onchange from folder
- **(assigmnentRule)**:  rm pagination on api get-all
- **(assigmnentRule)**:  rm pagination on api get-all
- **(assigmnentRule)**:  refactor coding style
- **(assignmentRule)**:  group data by object id
- **((Object/duplicate_rules, RecycleBin/services)))**: [#BUCRM-590] update duplicate rules in restore record
- **(assignmentRule)**:  change api reset max capacity
- **(assignmentRule)**:  change api reset max capacity
- **(assigmnentRule)**:  add pagingation to api get list
- **((Object/common/pipeline, UserRoleProfile/services))**: [#BUCRM-584] search user inactive
- **(Object/(duplicate_rules,object))**: [#BUCRM-586] Edit record in duplicate rules, add duplicate rules in merger record
- **(UserRoleProfile)**: [#BUCRM-565] [FIX]: Write multi values of Privileges to log system
- **(Report)**: [#BUCRM-20] [FIX]: share_to_groups of report onchange from folder
- can not load related interaction
- can not load related interaction
- **(UserRoleProfile)**: [#BUCRM-565] [FIX]: Write multi values of Privileges to log system
- error update default view
- can not mass edit
- not update related-object when delete object
- **(Object/duplicate_rules)**: [#BUCRM-526] duplicate rules Case Insensitive
- **(Object/object)**:  add user_delete record in mass_delete
- **(Object/(duplicate_rules, field))**: [#BUCRM-572] Block field deletion when setting up duplicate rules
- not show records inside interaction when deleted
- load wrong list-view
- **(Object/(duplicate_rules, object))**: [#BUCRM-561] duplicate rules in mass_edit record
- **(Report)**: [#BUCRM-358] [FIX]: delete all reports in deleted folder

## 2.19.1 (2022-08-19)

### Bug Fixes

- **(DuplicateRules)**:  rm (return _id, ID record)
- **(Report)**: [#BUCRM-358] [FIX]: delete all reports in deleted folder
- wf  has change not work
- wf first time not work

## 2.19.0 (2022-08-18)

### Bug Fixes

- workflow first time not work
- workflow first time not work
- **(formulaField)**: [#BUCRM-540] bug link to other formulaField
- **(formulaField)**:  add in_words method in datediff type
- **(Object/(duplicate_rules,models))**: [#BUCRM-526] check status case sensitive characters
- change date format from incoming email
- **(Object/(duplicate_rules,object))**:  DuplicateRule(return: _id, ID record)
- dynamic button not trigger workflow
- **(formulaField)**: [#BUCRM-535] re-work datediff calculation
- **(sms)**: [#BUCRM-532] can not parse content from sms template
- dynamic button not trigger workflow
- duplicate interaction sms
- auto select lookup field value
- **(email)**:  can not assign new ticket to specific user
- **(email)**:  can not assign new ticket to specific user
- **(notificaiton)**:  fix notifications
- **(finesse)**:  add api reset finesse globally
- send noti to tagged user
- **(email)**: [#BUCRM-509] fix wrong key of dictionary
- **(email)**: [#BUCRM-509] fix wrong key of dictionary
- can not update interaction details
- **(workflow)**:  add method re-calculate formulaField when wf create/update triggerred
- **(notificaton)**: [#BUCRM-311] can not send notification to assign_to.Report_TO
- **(Campaign)**:  Missing id field of Campaign and Campaign Task in Profile
- **(role)**: [#BUCRM-389] role name can be updated
- **(formulaField)**: [# BUCRM-494] formula-field can not show value
- related record create from workflow not show in consolidated-view
- **(notification)**:  fix routing path
- **(logger)**:  fix logger
- **(Object/duplicate_rule)**:  duplicate rules when ID field None
- **(Object)**: [#UCRM-186] [FIX]: Can not tranfer data to merged record

### Features

- **(UCRM-262, UCRM-263)**: [#SLA] [IMP]: is_repeated
- **(UCRM-262, UCRM-263)**: [#SLA] [IMP]: is_repeated

## 2.18.1 (2022-08-11)

### Bug Fixes

- changelog
- changelog

## list (2022-08-11)

### Bug Fixes

- **(assignmentRule)**:  use celery to scan assigmentRule
- **(finesseInegration)**:  set timeout for token
- linking related interaction
- **(Object)**: [#UCRM-186] [FIX]: Can not tranfer data to merged record
- **(Object/duplicate_rules)**:  duplicate_rule
- allow set rule for custom-admin
- check duplicate email
- **(CrmUploadData)**: [#BUCRM-454] [IMP]: Import records with SLA and Workflow
- custom-view condition with relatec
- **(Bump version)**:  Bump version

### Features

- **(assignmentRule)**:  add backgroundjob scan  assignment rule
- **(assignmentRule)**: [#UCRM-182] add assignment-rule feature

## 2.17.1 (2022-08-09)

### Bug Fixes

- **(Bump Version)**:  Trigger Bump Version
- custom-view condition with loop-up

## 2.17.0 (2022-08-09)

### Bug Fixes

- **(Object/duplicate_rules)**:  duplicate_rules with field None
- **(Object/duplicate_rules)**:  check duplicate_rules with field has value None
- **(Object/duplicate_rules,field)**:  delete field_rules in duplicate_rule
- **(Object/services)**:  session in api delete_record
- **(Object/services)**: [#BUCRM-353] [Workflow] Has changed Workflow
- **(CrmUploadData)**: [#BUCRM-454] [IMP]: Import records with SLA and Workflow
- **(scanEmail)**:  remove blank, tab characters from body
- **(email)**: [#BUCRM-410] can not send mail to bcc list
- default custom-view
- **(KnowledgeBase/views)**: [#BUCRM-407] Setting Knowledge base
-  update get list status of users
- **(CrmUploadData)**: [#BUCRM-315] [FIX]: Can not import Dynamic field
- worklow related record
- workflow create record with mutiple linking field
- **(RecycleBin)**:  add field user_delete_record in recycle_bin
- **(CrmUploadData)**: [#BUCRM-315] [FIX]: Can not import Dynamic field
- custom-admin
- **(LogSystem)**: [#BUCRM-444] [FIX]: can not search data in system log
- **(LogSystem)**: [#BUCRM-444] [FIX]: can not search data in log system
- **( CrmUploadData/views)**:  DuplicateRules in import excel
- custom-admin
- custom-admin
- **(Object/duplicate_rules)**:  remove func in duplicaterules
- **(CrmUploadData/views)**: [#BUCRM-441] Add rules duplicate import excel
- **(LogsHistory)**:  [IMP]: write type of flow to logs
- **(Object/duplicate_rules,object)**: [#BUCRM-440,BUCRM-427] DuplicateRule
- custom-admin consolidate-view
- custom-admin set default email
- custom-admin
- custom-admin
- **(LogSystem)**:  [FIX]: Can not search data between 2 datetimes in log system
- custom-admin picklist
- custom admin
- **(Object/duplicate_rules)**:  update: duplicate rules
- **(Object/group)**: [#BUCRM-396] CustomAdmin/Object management
- custom-admin
- **(LogsHistory)**:  [IMP]: write type of flow to logs
- **(Object/duplicate_rules)**:  CustomAdmin-DuplicateRules
- custom-admin error
- **(LogsHistory)**:  [REF]: write_log_for_merge_record()
- **(LogsHistory)**:  [REF]: write_log_for_merge_record()
- **(Object/duplicate_rules)**:  Update CustomAdmin/DuplicateRules
- **(LogsHistory)**:  [FIX]: Can not write dynamic logs

### Features

-  add feature user online/offline
- **(LogSystem)**:  [IMP]: Write custom admin to log system
- **(LogSystem)**:  [IMP]: Write custom admin to log system

## 2.16.0 (2022-08-02)

### Bug Fixes

- remove test
- **(UserRoleProfile)**: [#BUCRM-386] notification user login inactive
- **(Object/object)**: [#BUCRM-370] API update_group_setting
- custom-admin in O365
- **(ExportUsers)**:  handle records that are inactive or deleted.
- **(CCCmCmCmCmCmCmCmCmCCmCmCmCmCmCmCmCmCmCCCCCCCCCCCCCCm)**:  handle records that are inactive or deleted.
- **(o365Integration)**:  wrong scope for msgraph
- **(CrmImportUser/views)**: [#BUCRM-388] CustomAdmin/User
- **(daphne)**:  refactor asgi consumer
- can not add account outlook
- **(Object/urls)**:  Update: duplicate rules
- custom-admin in consolidated-view
- normal user can not set rule for others
- custom-admin in consolidated-view
- custom-admin dynamic-button
- piclist
- change message error in merge record
- **(LogsHistory)**:  [FIX]: Can not write dynamic logs
- can not get assign to of related record
- **(o365Integration)**:  remove test
- **(o365Integration)**:  remove test
- **(finesse)**:  add additional flow to authenticate user
- [#BUCRM-300] refactor code and add permission view mail box
- **(Report)**: [#BUCRM-354] Fix data issue when use outer fields in Or Conditions
- **(field)**: [#BUCRM-339] can not update formulaField
- **(importUsers)**:  Verify the quantity of remaining  users.
- **(importUsers)**: [#BUCRM-351] Remove meaningless log lines
- **(Report)**: [#BUCRM-361] Fix wrong pagination issues when get shared reports
- **(calendar)**: [#BUCRM-359] resolve issue relative to calendar notification
- list view details not show metadata
- **(requirements)**: update libs
- **(requirements)**: update libs
- login with case-insensive
-  delete-user
- login with case-insensive
- interaction of parent-child ticket
- **(UserRoleProfile)**:  [IMP]: Get value form dictionary
- **(UserRoleProfile)**:  [IMP]: improve LogSystem content
- **(o365)**:  add api o365
- add custom-admin
- **(email)**:  refactor email module
- **(KnowledgeBase/views)**: [#UCRM-219] Update: CustomAdmin/knowledgebase
- can not view sla instances
- **(Object/Kanban)**: [#UCRM-242] Update: CustomAdmin/Kanbanview
- tranfer interation
- tranfer interation
- **(GoogleIntegration/views)**:  Update: CustomAdmin/GoogleIntegration
- **(LogsHistory)**:  [FIX]: Can not write multi values to log
- **(LogsHistory)**:  [IMP]: None value
- **(LogsHistory)**:  [IMP]: Name of variables
- **(smbproject)**:  [FIX]: restore settings.py
- **(LogsHistory)**:  [FIX]: Can not write multi values to log
- interaction
- interaction not show in relate object
- **(GoogleIntegration)**:  Update: CustomAdmin/Google
- add constains on create group setting
- missing data in interaction
- custom-admin
-  resolve conflict
- **(Calendar)**:  Remove: CustomAdmin/Calendar
- **(Report)**:  Change Caching Time for Redis

### Features

- **(CrmUploadData)**:  [IMP]: Add write action log
- **(Object/duplicate_rules)**: [#UCRM-183] Update duplicate_rules
- **(Object/model)**: [#UCRM-183] Update: model duplicate_record
- **(CrmUploadData)**:  [IMP]: Add write action log
- **(email)**:  integrate outlook  xoauth2.0  to scanning email
- **(Object/object,urls)**:  Update: API load_record_meta_data

## 2.14.0 (2022-07-21)

### Bug Fixes

- **(o365)**: minor change
- **(Report)**:  Change Caching Time for Redis
- api update data from third-party
- **(Object/(field,group,object,section))**:  Update: CustomAdmin/Object management
- **(UserRoleProfile)**:  [REF]: check exsit profile name
-  [FIX]: git comments
-  [IMP]: catch write logs exceptions
- **(Object/group)**:  Update: CustomAdmin/Group
- **(LDAP)**: [#UCRM-220] Update: CustomAdmin/LDAP
-  update CustomAdmin/constants
-  update CustomAdmin/constants
- **(ExposeAPIs)**: [#UCRM-213] Update: CustomAdmin/ExposeAPIs
- **(o365)**:  format code
- **(finesse)**:  roll back to normal user when authenticate
-  remove module o365
- **(UserRoleProfile)**:  [REF]: check exsit profile name
- **(RecycleBin)**:  Update Scan delete_record
- BUCRM-251 hidden object when profile is disable
-  Add domain: crmuploaddata
- **(Calendar)**: [#UCRM-207] comment CustomAdmin/Calendar
- **(o365)**:  remove decode token method that not verified
- **(o365)**:  remove decode token method that not verified
- **(finesseIntegration)**:  change normal user to admin for authentication
- **(finesseIntegration)**:  change normal user to admin for authentication
- **(o365)**: minor change
-  pass security scanning and update env
-  resolve confict requirements
-  resolve confict requirements
- **(formulaField)**:  mutable variable change
-  email notification
- **(email)**:  refactor coding style
- api check user
- root can not create user
- **(SLA)**:  Rerun SLA Service in Celery
- dynamic button can not update record
- **(swagger)**:  set token default to swagger
- **(SLA)**: [#BUCRM-101] Improve SLA Notification Message
- **(sharing)**:  fix api edit sharing
- check user can see record comment
- can not add group
- can not comment
- **(CrmUploadData)**:  [IMP]: performance when import records

### Features

- **(o365Integration)**:  integrate outlook xoauth2.0 to send email
- **(o365Integration)**: [#UCRM-189] integrate microsoft o365 and microsoft graph to CRM

## 2.13.2 (2022-07-19)

### Bug Fixes

- **(workflow)**:  could not parse related field in email template via workflow
- **(Object,LDAP)**:  Remove CustomAdmin
- **(callapi)**: [#BUCRM-282] make action status default is off
- group with custom-admin
- **(email)**:  could not store attachments
- **(UserRoleProfile/user)**:  Fix: API delete_user
- **(Object/object)**: [#UCRM-215] Update: CustomAdmin/OBJECT_LAYOUT
- **(object)**:  refactor object and improve action send email
- **(UserRoleProfile/group)**: [#UCRM-230] Update: CustomAdmin/Group
- **(Object/object)**: [#UCRM-232] Update: CustomAdmin/Criteria_Sharing
- **(CrmUploadData)**:  [FIX]: useless self-assignment
- **(LDAP/views)**: [#UCRM-220] Update: CustomAdmin/LDAP
- **(Interval)**: [#BUCRM-206] Comment out SLA Scanning
- custom-admin error message
- **(finesse)**:  call pop up improperly
- UCRM-101 dynamic button
- **(SLA)**: [#BUCRM-206] Fix SLA duplicate issues
-  [FIX]: bug write log when update records
- **(RecycleBin)**:  update field log
- can not load third-party component
- custom-admin
- **(RecycleBin,celery)**:  Update: time scan delete record
- **(RecycleBin)**:  update RecycleBin
- **(RecycleBin,celery,Interval)**:  Update: scan delete 10 tenants
-  cannot get user fullname
- **(LogsHistory)**: [#BUCRM-269] [FIX]: bug write log when mass edit records and refactor code
- **(calendar)**:  missing record id
- **(calendar)**:  cannot push notification
- **(calendar)**:  add record id to calendar notification
- integrate custom admin to profile
- **(sms)**:  sms configuration need to provide optional options.
- **(smb/celery)**:  Update: time scan delete_record
- api load all custom-admin
- api create user, edit user

## 2.13.1 (2022-07-14)

### Bug Fixes

-  bump version

## 2.13.0 (2022-07-14)

### Bug Fixes

- **(Refactor Code)**:  Use Constants for Object and Field Prefix
- return error if update fail
- **(UserRoleProfile)**:  [FIX]: bug write log when update Profiles
- api load third-party
- **(UserRoleProfile/profiles)**: [#BUCRM-250] Fix: update_profile
- api load third-party data
- **(UserRoleProfile)**:  [FIX]: bug write log system when update User
- **(UserRoleProfile)**:  [FIX]: bug write log system when update profiles
- **(finesse)**:  invalid syntax
- **(finesse)**:  rm access_key required
- **(calendar)**:  notification issues
- **(UserRoleProfile/profiles)**: [#BUCRM-258] Fix: Transfer rights when deleting Profiles
- api load comment
- mongodb class
- **(RecycleBin)**:  Fix: update RecycleBin
- **(Object)**:  [FIX]: cannot update clean_days_config
- **(LogsHistory)**:  [FIX]: bug in write log object when update record
- **(DynamicButton)**:  Refactor code and rename constants
- **(RecycleBin,celery)**:  Fix: update time delete record
- **(Refactor Code)**:  Remove unused constants
- **(email)**:  rename attachment that has the same name as other
- **(Object/object)**:  update deleted_time in delete_record
- **(calendar)**:  remove notification when owner choose email options
- **(Object)**:  [FIX]: Mass edit do not write log
- **(Object/object)**: [#BUCRM-222] Fix update_record
- **(smb/celery)**:  Fix:update time delete record
- **(RecycleBin)**:  Fix check_time
- **(RecycleBin)**:  Fix check_time
- **(RecycleBin/services)**:  Fix func check_time in RecycleBin
- **(Object)**:  [FIX]: field is_loggable
- **(finesse)**:  add timeout when checking ods
- **(CrmImportUsers)**:  [FIX]: clean code
-  update celery delete record
- **(RecycleBin/services)**:  update: scan time delete record
- **(UserRoleProfile)**:  [FIX]: conflicts
- **(RecycleBin/services)**:  Update scan time delete record
- **(RecycleBin/server)**:  Update scan delete record

### Features

- **(LogsHistory)**:  [IMP]: clean_log_history()
- **(LogsHistory)**:  [ADD]: Clean data config for log history
- **(o365)**:  integrate o365 to crm
- **(CrmImportUser)**:  [IMP]: Import user
- **(UserRoleProfile)**:  [IMP]: Write log when import users

## v2.12.0 (2022-07-12)

### Bug Fixes

- **(Workflow, Campaign)**:  Run Workflow and Campaign with Celery
- **(UserRoleProfile/user)**:  Fix: Show all user
- bucrm-228
- **(UserRoleProfile/user)**:  Fix: update API delete user
- **(SLA)**:  Scan SLA with Celery
- **(UserRoleProfile)**:  [IMP]: Improve write log when update user profiles permissions
- bucrm-226
- **(UserRoleProfile/user)**:  update: API delete_user:delete all config user
- bucrm-127 can not edit group sharing
- **(UserRoleProfile)**:  [FIX]: null Description at Profiles Setting

## 2.12.0 (2022-07-11)

### Bug Fixes

- **(RecycleBin)**:  Fix: RecycleBin
- **(Object, smproject)**:  [FIX]: Object, smproject
- api update user
- **(SLA, ThirdPartyAPIs)**:  [FIX] import module
- **(RecycleBin)**:  fix: RecycleBin
- **(SendEmail)**:  [FIX]: ck_interval()
- **(SendEmail)**:  [FIX]: ck_interval
- **(SendEmail)**:  [FIX]: ck_interval()
- **(RecycleBin)**:  fix RecycleBin
- **(ListViewDetails)**:  fix api load list-view-details
- **(import)**:  revert the sweet code that mr.sondh destroyed.
- **(smproject)**: [#None] [FIX]: settings.py
- **(smproject)**: [#None] [FIX]: settings.py
- **(UserRoleProfile)**: [#None] [FIX]: missing update_active()
- **(UserRoleProfiles)**: [#None] [FIX]: missing get_user_privilege()
- **(importUsers)**:  refactor code
- remove recycle bin module
- resolve confict
- BUGCRM-127 can not edit group setting rule
- **(Log)**: Refactor and Improve Log for Object and Field
- **(ListViewDetails)**: [#None] [FIX]: conflicts
- api load list-view with details
- **(Log)**: Refactor and Improve Log for Object and Field
- api load list-view-with-detail
- can not load list-view-details layout
- can not load list-view-details layout
-  refactor coding style
- **(users)**:  add users import logs
- api load list-view details
- api load list-view details
- api load list-view-details
- sync data ldaps
- LDAP flows
- api load list-view-details setting
- **(email)**: [#BUCRM-186,BUCRM-194] the user's fullname was incorect, the linking fields can not be parsed in the email template.
- **(celery)**:  enable email scanner in celery configuration
- **(email)**:  allow only incoming email trigger action markread
- **(email)**:  refactor mark read
-  improve serve protection
- **(import users)**:  improve generate sample data
- **(calendar)**:  filter empty value before pass to model
- **(SLA)**:  Fix issue when using 'Contains' Conditions
- **(fomula)**:  fix bug formula

### Features

- **(LogSystem)**: [#UCRM-180] [ADD]: LogSystem
- **(LogSystem)**: [#UCRM-180] [ADD]: LogSystem
- **(users)**:  add feature import/export users

## 2.11.0 (2022-06-30)

### Bug Fixes

- **(Tenant Configuration)**:  Return Root Role _id when clone Tenants
- **(swagger)**:  refactor swagger
- **(email)**:  add option select another object mail setting to send email

### Features

-  add user list import features

## 2.10.1 (2022-06-28)

### Bug Fixes

- [#BUG-1234] config cz

## 2.10.0 (2022-06-28)

### Bug Fixes

- #12312312 config cz
- (#1234) config cz
- roll back urls.py
- roll back urls.py
- format celery
- props in ldaps model
- **(calendar)**: replace wrong variable
- **(calendar)**: remove empty filter
- **(calendar)**: refactor code and remove test data
- **(calendar)**: improve email template
- update group sharing when delete group
- duplicate rule in group sharing setting
- minor change
- **(knowledgebase)**: The API response does not provide the required information.
- **(calendar)**: refactor path api
- **(email)**: fix extend list cc to list recipients
- **(calendar)**: refactor coding style
- **(calendar)**: auto add owner to list guests
- refactor code
- **(calendar)**: improve filter calendar event
- **(swagger)**: add enum to items in array
- password length must be larger than 8

### Features

- **(calendar)**: add scan upcoming event by celery
- **(calendar)**: add notification to calendar
- **(calendar)**: add features that create repeat event

## 2.9.0 (2022-06-23)

### Bug Fixes

- **(finesse)**: write recording url always
- **(calendar)**: add filter to get calendar event
- **(object)**: add custom field date and datetime schema
- **(swagger)**: add custom query string to swagger
- bug 115 can not delete record
- **(knowledgebase)**: add start date and end date to get articlie data
- **(Summary Report)**: Sort column and row header
- **(Report)**: Refactor code and fix issue when edit report
- **(role)**: add constrains when delete role
- api linking
- **(tenants)**: get list tenant does not return newest records
- api load favorite object
- **(email)**: fix can not parse metadata of record in email templates
- can not update, delete active button
- hide off object in list-view
- refactor code
- **(Summary Report)**: Fix issue when hiding Percentage value
- add permission to calendar events
- refactor swagger
- add emum to swagger
- reply's order in comment
- **(Campaign)**: Fix SMS issue

### Features

- **(Summary Report)**: Show/Hide Grand Total, Remove rows with all zeros

## 2.8.0 (2022-06-21)

### Bug Fixes

- add authorization method in page logs view
- **(calendar)**: minor changes for calendar alerts
- decode token with sso
- can not update config cti
- send noti
- send noti duplicate
- duplicate notification
- can not send notification to comment owner
- api comment
- notifcation message when reply, comment
- workflow has change not work

### Features

- **(calendar)**: add module calendar

## 2.7.4 (2022-06-19)

### Bug Fixes

- can not open consolidate-view when open noti
- can not delete comment
- api unlike
- can not update reply
- **(sms)**: fix missing header when sending requests
- api delete comment
- comment pagination
- **(Summary Report)**: Fix NaN Issues when calculate in percentage
- add event update voice biometric customer
- add api check interaction
- **(Summary report)**: Show measure value by decimal places
- api udpate ic setting
- **(tenants)**: minor change for ISO requirements
- api interation comment
- **(tenant)**: include field search in pagination
- api comments

## 2.27.3 (2022-10-28)

### Bug Fixes

- **(Version)**:  Bump version
- **(Workflows)**:  Fix Workflow Schedule Spam issues
- **(SLA/sla_scheduler_helper)**:  add category[SLA] in notification
- **(Workflows)**:  Fix Workflow Schedule Spam issues
- **(Mobile/services)**:  update load_data_field_mobile
- **(SLA/sla_scheduler_helper)**: [#BUCRM-800] Notification of SLA on mobile
- **(Mobile/services, Report(charts, widgets))**:  add field is_pinned_to_home on mobile
- **(ScanEmail)**: the related field was wrong
- **(Kanban)**:  Fix Kanban Pagination issues
- **(Kanban)**:  Show page records and uncategorized records when load kanban data
- **(Kanban)**:  Remove record per page and current page when load kanban data
- **(Kanban)**:  Apply new pagination flow in Kanban

## 2.27.2 (2022-10-26)

### Bug Fixes

- **(ScanEmail)**: the related field was wrong

## 2.27.1 (2022-10-25)

### Bug Fixes

- **(Calendar)**:  Correct the incorrect repeat event alert time.
- consolidated-view can not load data
- consolidated-view can not load data
- search with pagination
- search with pagination
- **(Campaign/services)**:  bug export role profile
- **(TenantConfig)**: [#BUCRM-516] Add Dynamic Button, Email Template and SMS...
- **(TenantConfig)**: [#BUCRM-516] Add Dynamic Button, Email Template and SMS Template when clone Tenants
- wf can not update assign to
- wf can not update assign to
- wf can not update assign to
- wf can not update assign to
- wf can not update assign to
- wf can not update assign to
- wf can not update assign to
- dynamic button
- **(Mobile/services, ListView/views)**:  add custom_view for mobile
- can not delete record

## 2.27.0 (2022-10-20)

### Bug Fixes

- **(Object/object.py)**:  add is_default in load_all_custom_view
- changing redis configuraition
- changing redis configuraition
- update function duplicate rules
- **(Campaign)**:  Fix issue cannot send manual Member to MailChimp
- pagination in component
- pagination in component
- **(Campaign)**:  Fix Campaign Issues (WIP)

### Chore

- add api for resetting configuration
- add api for resetting configuration
- changing redis configuration
- improve build process
- add health-check api & requirements
-  remove old method for catching data
- add command to execute flower
-  remove old method for catching data
- **(Email)**:  check whether the email is a reply to an existing ticket

### Features

- **(Email)**:  Allow the user to select a specific email folder from which to scan emails.
- **(Email)**:  Allow the user to select a specific email folder from which to scan emails.

## 2.26.3 (2022-10-14)

### Chore

- **(Email)**:  check whether the email is a reply to an existing ticket

## 2.26.2 (2022-10-14)

### Bug Fixes

- **(OAuth2)**: close popup when user is authenticated
- **(OAuth2)**: close popup when user is authenticated
- wf can not send noti
- update time (Scan Time Delete Notification) in celery
- update REDIS
- update REDIS_HOST, REDIS_PORT, REDIS_USERNAME, REDIS_PASSWORD, REDIS_PROTOCOL in file .example.env
- **(SLA)**:  Turn on all SLA Scanners when check health
- **(TenantConfiguration)**:  Add Id field for old data when convert to ver 2
- notification
- [UCRM-353] add Task Scan Time Delete Notification with celery
- **(Logging)**:  limit size of log file to 20bb
- update constants object/constants
- dynamic button with type user not work
- **(TenantConfiguration)**:  Fix field Id issues when convert to ver 2
- **(Report)**:  Fix issues when run Report Chart Widget on Debian
- **(Report)**:  Fix issues when run Report Chart Widget on Debian
- [UCRM-354] update capacity in uploadfile
- update DATA_UPLOAD_MAX_MEMORY_SIZE=25MB
- login with ldap
- dynamic button with type user not work
- dynamic button with type user not work
- keep email format in login
- keep email format in login
- notification in shared_to
- format formular field
- **(SMS)**:  preventing SMS transmission when the configuration is deleted
- wf can not update related assign to
- Picklist dependency
- [BUCRM-744]target fields automatically turn on all in Picklist dependency
- auto share to user tenant
- format list-view data
- format list-view data
- format list-view data
- **(TenantConfiguration)**:  Fix issues when convert to version 2
- **(Campaign)**: [#BUCRM-721] Update Campaign Status when update Campaign...
- **(Campaign)**: [#BUCRM-736] Apply Mass Delete for Campaign
- **(Campaign)**: [#BUCRM-721] Update Campaign Status when update Campaign Config. Generate member when Campaign changes to In Queue
- related linking field
- related linking field
- **(SLA)**: [#BUCRM-693] Apply Formula Field when run SLA Action
- **(SLA)**: [#BUCRM-693] Apply Formula Field when run SLA Action
- **(Kanban)**: [#BUCRM-695] Use new Decorator for Kanban APIs
- **(Kanban)**: [#BUCRM-695] Use new Decorator for Kanban APIs
- linking object
- linking object
- url in manula-sharing
- url in manula-sharing

### Chore

- **(Setting)**:  refactor redis configuration
- **(Notification)**:  refactor channel consumer
- **(Celery)**: migrate old celery settings to new file

## 2.26.1 (2022-10-07)

### Bug Fixes

- **(IncomingEmail)**: fix wrong datetime format
- add file extension (img, ppt) in uploadfile

### Chore

- **(Email)**: refactor old data

## 2.26.0 (2022-10-06)

### Bug Fixes

- **(Notification)**: limit latest 1000 records
- add file extension .rar in uploadfile
- **(Notification)**: replace sort by created_date to _id to improve performance
- **(Notification)**: replace sort by created_date to _id to improve performance
- update code export_permission_role_system
- custom-view details
- custom-view details
- **(User)**: incorect total page
- **(Notification)**: remove count query due to bad performance
- **(Notification)**: only return call start time if event is 'Answer Call'
- custom-view details
- update action related record
- update action related record
- **(Notification)**: remove count when fetching all notification
- [BUCRM-482]
- [BUCRM-482] update in Picklist source
- **(Campaign)**:  Fix issues when Object has no non-id field
- **(User)**: delete related finesse settings when the user is deleted.
- update message in constants Mobile
- consolidated view can not see record shared by manual sharing
- consolidated view can not see record shared by manual sharing
- lost manual sharing record when update
- can not see record shared by manual sharing
- update
- add api Mobile[ pin_report_home, unpin_report_home, get_report_home]
- can not send noti to group

### Chore

- **(SMS)**: add record_id to get-all-message api
- format log
- disable root permission check
- **(SMS)**:  Add feature that creates  interaction in the function send_sms.
- remove nonsense function logging
- **(SMS)**:  add total records to pagination

### Features

- **(Mobile)**:  [ADD]: Firebase Push Notification.
- **(Mobile)**:  [ADD]: Store device token to Redis.

## 2.25.0 (2022-10-04)

### Bug Fixes

- **(Logger)**:  move logger configuration file to smbproject to avoid an unexpected bug
- **(Report)**: [#BUCRM-654] Fix Middle Name issues
- **(Report)**: [#BUCRM-654] Fix Middle Name issues
- **(Report)**: [#BUCRM-654] Fix Middle Name issues
- can not create action update-related
- can not create action update-related
- can not create action update-related
- can not send noti
- can not send noti
- can not share record
- clear data when select linking field
- clear data when select linking field
- clear data when select linking field
- wf has change can not send notification
- **(MailBox)**: [#BUCRM-570] sort mail message by date instead of _id
- **(CrmImportUsers)**: [#BUCRM-660] can not update user information if the email provided is case-insensitive.
- wf has change can not send notification
- update functionformat_content
- update functionformat_content
- update functionformat_content
- **(Campaign)**:  Show Campaign Running Status when generate Object Campaign
- **(Campaign)**:  Show Campaign Running Status when generate Object Campaign
- **(Kanban)**: [#BUCRM-695] request does not have request_data attribute
- **(SMS)**:  parse recipient of sms outgoing from record
- **(Campaign)**:  Show Campaign Running Status when generate Object Campaign
- search_custom_view[BUCRM-606, BUCRM-645]
- remove raw_content
- add (raw_content and category in function [action_send_notification, create_notification])

### Chore

- rm PKCS7Encoder
- rm PKCS7Encoder
- **(Notification)**: [#BUCRM-691] add method that parse user_id from...
- rm pre-commit
- **(CacheMeoize)**:  add caching condition callable
- **(Notification)**: [#BUCRM-691] add method that parse user_id from user-field to send notification
- **(User)**: [#BUCRM-703] add api that normalize all text in User db to NFC standard

### Features

- **(SMS)**:  add component sms api

## 2.24.0 (2022-09-29)

### Bug Fixes

- **(Mailbox)**:  fix incorrect object_id of MailBox
- **(Campaign)**:   Fix Validate Campaign Datetime Issues
- **(Campaign)**:   Fix Validate Campaign Datetime Issues
- **(Campaign)**:  Fix Issues when editing Campaign Config
- **(Campaign)**:  Fix Issues when editing Campaign Config
- **(MailChimp Integration)**:  Fix issues when connect MailChimp
- **(MailChimp Integration)**:  Fix issues when connect MailChimp
- **(Campaign)**:  Fix Issues when Running Campaign with multiple Recipients
- **(Campaign)**:  Fix Issues when Running Campaign with multiple Recipients
- **(Campaign)**:  Fix issues when sending SMS
- **(MailChimp Integration)**:  Fix issues when run Campaign Tasks with MailChimp
- **(Campaign)**:  Fix issues when scan Campaign Statuses
- **(MailChimp Integration)**:  Store MailChimp Config in ScanCampaign
- **(MailChimp Integration)**:  APIs to get Campaign Content, Campaign List and Disconnect Mailchimp Account
- **(Campaign MailChimp)**:  API to get MailChimp Root Info
- wrong fucntion name
- manual sharing
- manual sharing
- api load linking-field-values
- remove api total_record
- remove api total_record
- can not update field owner in wf
- refactor code duplicate_rules
- disable mutiple in field select
- disable mutiple in field select
- [UCRM-325]-API: Modify current get list notifications api to show Read/Unread/All
- update constants notification
- remove comment export role profile
- duplicate rule with integrated IC
- can not update action in wf
- **(Campaign (WIP))**:  Api to update Campaign Running Status and Configuration
- **(Campaign (WIP))**:  Fix issue when run Workflow and SLA for Campaign Task
- **(Campaign (WIP))**:  APIs to get Campaign Component data
- **(Campaign (WIP))**:   Fix issues when generating and running tasks
- **(Campaign (WIP))**:  Fix issues when generate and run campaign
- **(Campaign)**:  Refactor code for Campaign and Task Scanner
- **(Campaign)**:  Generate and Run task for Campaign
- **(Campaign (WIP))**:  Generate Task by Campaign Member
- **(Campaign)**:  Allow to generate member when create or edit campaign
- **(Campaign)**:  Add function to validate Campaign Info and Config
- **(Campaign)**:  Show Repcipients Objects when get Campaign Config
- **(Campaign (WIP))**:  Refactor Code
- **(Campaign (WIP))**:  API to validate campaign recipients objects
- **(CampaignObjectGenerator)**:  Object Generator Services
- **(CampaignGenerator)**:  Add menu_index in ObjectGenerator, Add service for object generator
- **(Campaign)**: [#UCRM-257] Generators for Campaign, Member, Task (WIP)
- **(ObjectGenerator)**:  GeneratorHelper and StandardObjectGenrator

### Chore

- **(Importusers)**: [#BUCRM-583, BUCRM-656] Make the validation error message easier to read.
- **(AssignmentRule)**: decrease scheduler time and increase limited records to 1000
- **(AssignmentRule)**: decrease scheduler time and increase limited records to 1000
- **(conf)**:  remove some stuff
- **(Caching)**:  implement memorize caching
- **(Email)**:  update method to parse email template
-  refactor coding style
- **(Calendar)**: update payload api create-calendar-event
-  update cz config
- config gitignore
- refactor code
- Add monitor performance method

### Features

- **(Campaign)**: [#UCRM-27, UCRM-28, UCRM-257] MailChimp Integration
- **(Campaign)**: [#UCRM-27, UCRM-28, UCRM-257] MailChimp Integration
- **(MailChimp Integration)**:  Get MailChimp Template for Email campaign
- **(MailChimp Integration)**:  API to send MailChimp Member from Campaign Tasks. Close Modal in MailChimp Callback
- **(Workflow)**:  add workflow create calendar event
- **(workflow)**:  add create-calendar-event action in workflow
- **(DynamicButton)**:  add create-event-calendar action in dynamic button
- **(Campaign)**: [#UCRM-257] Campaign Enhancement
- **(Campaign (WIP))**:  Convert to standard structure when generate Task and Member
- **(Campaign)**:  API to check availibilty of Campaign Feature

## 2.23.4 (2022-09-22)

### Bug Fixes

- update changelog

## 2.23.3.1 (2022-09-22)
Bug Fixes
	•	(DuplicateRule): update duplicate when field ID None
	•	(Dashboard):  Add chart_type validate.

Features
	•	(Workflow): action update related-record workflow


## 2.23.3 (2022-09-20)

### Bug Fixes

- linking value
- linking value
- update IconManagementMobile
- update IconManagementMobile

## 2.23.2 (2022-09-16)

### Bug Fixes

- can not update interaction details
- can not update interaction details
- can not update interaction details
- linking value

## 2.23.1 (2022-09-16)

### Bug Fixes

- **(ScanEmail)**: remove special character in email subject

## 2.23.0 (2022-09-16)

### Bug Fixes

- **(FinesseIntegration)**: Change method that checking ha of calabrio
- related data
- add middlename when sync with ldap
- **(Mobile)**:  Refactor dashboard type and component type.
- **(Mobile)**:  Refactor dashboard type and component type.
- can not load related data
- **(ListView)**: Check not object_id
- **(ListView)**: Check not object_id
- **(ListView)**: Check not object_id
- can not load related data
- linking related record
- duplicate rule
- duplicate rule
- **(Mobile)**:  [FIX]: SlaInstance cannot lookup to Object
- **(Mobile)**:  [FIX]: SlaInstance cannot lookup to Object
- duplicate rule in workflow
- **(getPhoneField)**: filter by object_id
- **(CRITICAL)**: wrong key channel layer
- clean code
- duplicate rule
- merge branch develope
- refactor code
- update .env
- duplicate rule
- **(Mobile/(constants,icon,services,urls,views))**: [#[UCRM-287,UCRM-288,UCRM-290,UCRM-278]] update api Icon Management Mobile

### Features

- **(DbHealthCheck)**: add database healcheck and monitoring slow queries
- **(DbHealthCheck)**: add database healcheck and monitoring slow queries
- **(Mobile)**: [#UCRM-289, UCRM-317] [ADD]: add SLA APIs for Mobile.
- **(Mobile)**: [#UCRM-289, UCRM-317] [ADD]: add SLA APIs for Mobile.

## 2.22.1 (2022-09-13)

### Bug Fixes

- **(AssignmentRule)**: limit records found to improve perf
- **(VoiceBiometric)**: handle exception

## 2.22.0 (2022-09-13)

### Bug Fixes

- remove custom admin checking when update pwd
-  add health check api
-  add logging to assignmentRule
-  add logging to email scanning service
- duplicate rule in assignment-rule
- load data field mobile
- **(Report)**: [#BUCRM-627] Show 'In words' Property for Formula Field
- **(Report)**: [#BUCRM-627] Show 'In words' Property for Formula Field
- Export role profile
- update export permission role system
- update ROOT_EMAIL and ROOT_EMAIL_PW
- can not reset password
- can not reset password
- duplicate rule
- duplicate record in workflow

### Features

- **(Mobile)**:  [ADD]: Add Pin/Unpin APIs for Mobile.
- **(Mobile)**:  [ADD]: Add Pin/Unpin APIs for Mobile.
- **(Mobile)**:  [REF]: Refactor type fields for home screen config.
- **(Mobile)**:  [REF]: Refactor type fields for home screen config.
- **(Mobile)**:  [REF]: Refactor APIs to new database structure.
- **(Mobile)**:  [REF]: Refactor APIs to new database structure.
- **(Workflows)**:  [IMP]: add more log systems.

## 2.21.0 (2022-09-08)

### Bug Fixes

-  importUsers
-  sort email
-  fix assignmentRule & configure advance log
- [BUCRM-604] Duplicate Rule create record in workflow
- add info rule duplicate
- add singleton to task
- update export permission role system
- update file CHANGELOG
- update file CHANGELOG
- export permission role system
- export permission role system
- change name_body mobile
- export role profile
- add try catch
- **(ScanEmail)**:  add email limit constant

### Features

- **(Mobile)**: [#UCRM-284, UCRM-285] [ADD]: Mobile Components APIs
- **(Mobile)**: [#UCRM-284, UCRM-285] [ADD]: Mobile Components APIs

## 2.20.1 (2022-09-07)

### Bug Fixes

- error in check permission

## 2.20.0 (2022-09-06)

### Bug Fixes

- [UCRM-297]: mobile custom view
- update default load field on mobile
- missing field email in action create record
- missing field email in action create record
- custom-admin
- update custom admin in export role profile
- add custom admin in export permission role system
- add extension section in uploadfile
- **(Role)**:  export permission role system **(Hotfix)**
- **(Notification)**:  change sort-by from created_by to _id to improve performance
- **(ScanEmail)**:  limit email for each scan
- **(AssignmentRule)**:  update get-round-robin-user funtion
- **(ImportUsers)**:  add user merging
- setting custom-admin with profile
- update api export_role
- update role permission
- **(Report)**: [#UCRM-268] Show formula type when get Report info
- add module Mobile
- **(Report)**: [#UCRM-268] Show formula type when get Report info
- add module Mobile
- add API export permission role system
- add API export permission role system
- setting custom-admin with profile
- **(SummaryReport)**: [#UCRM-273] Store Formula Type in Report Measure
- time in celery
- api load linking record
- **(manage.py)**: update env
- **(SummaryReport)**: [#UCRM-273] Store Formula Type in Report Measure
- **(AssignmentRule)**:  update get-round-robin-user funtion
- api load linking record
- update time in celery
- pagination when load linking value
- refactor code
- refactor code
- refactor code
- refactor code
- add pre-commit command
- add ignored file
- change pre-commit hook configuration
- **(logging)**:  refactor log configuration
- add pre-commit hook
- **(AssigmentRule)**: Refactor coding style
- **(smbproject/Common/constants)**:  update uploadfile
- **((Object/duplicate_rules,object))**:  update duplicate rules add Dialog box
- remove unused import
- **(Object)**:  [FIX]: Can not write linking fields after merge records.
- **(Object)**:  [FIX]: Can not write linking fields after merge records.
- **(Object)**:  [FIX]: Can not merge linking fields for master record.
- **(Object)**:  [FIX]: Can not merge linking fields for master record.
- **(assignmentRule)**:  wrong assign amount per step
- **(assignmentRule)**:  wrong assign amount per step
- **(AssignmentRule)**:  wrong remaining records
- **(AssignmentRule)**:  wrong remaining records
- disable lib
- **(assigmentRule)**:  change condition filtering record
- update uploadfile
- **(requirements)**:  remove library magic
- **(requirements)**:  update library magic
- disable lib
- **(Object/object)**:  update uploadfile
- **(Object/object)**:  Allow file extensions to be uploaded
- **(assignmentRule)**:  update logging and change flow assignmentRule
- **((Object/object, smbproject/Common/constants))**:  Block file types that are not allowed to be uploaded
- **(Object/duplicate_rules)**:  update duplicate rules
- **(SLA)**: [#BUCRM-312] Apply checking workflow 'first time' and 'has change' in SLA actions
- **(RecycleBin/services, Object/(duplicate_rules, object))**: [#UCRM-270] add dialog box in duplicate record
- **(SLA)**: [#BUCRM-312] Apply checking workflow 'first time' and 'has change' in SLA actions

### Features

- **(CustomAdmin)**:  [REF]: Write log system for Profile.
- **(CustomAdmin)**:  [REF]: Write log system for Profile.
- **(Widget)**: [#UCRM-268] Add formula type for Widget Measure
- **(Widget)**: [#UCRM-268] Add formula type for Widget Measure

## 2.19.2 (2022-08-25)

### Bug Fixes

- can set mutiple default custom-view
- can not load related interaction
- **(scanEmail)**:  keep config status is on when config is invalid
- **(scanEmail)**:  keep config status is on when config is invalid
-  sort mailbox by date
- **(importUsers)**:  not show notification when import failed
- **(Object/duplicate_rules)**:  update duplicate rules in restore record
- **(assignmentRule)**:  refactor coding style
-  update logging and assigmentRule feature
- **(Object/object(uploadfile))**:  block invalid files avatar
- api load visible object
- **(ConvertToVersion2)**:  Fix default value issue in workflow
- **(notification)**:  detached session of an user instead of put it all in to one group
- **(Notification)**:  rename push notification function
- **(Websocket)**:  migrate user sessions to specific group instead of put it in one group
- **(Report)**: [#BUCRM-20] [FIX]: share_to_groups of report onchange from folder
- **(assigmnentRule)**:  rm pagination on api get-all
- **(assigmnentRule)**:  rm pagination on api get-all
- **(assigmnentRule)**:  refactor coding style
- **(assignmentRule)**:  group data by object id
- **((Object/duplicate_rules, RecycleBin/services)))**: [#BUCRM-590] update duplicate rules in restore record
- **(assignmentRule)**:  change api reset max capacity
- **(assignmentRule)**:  change api reset max capacity
- **(assigmnentRule)**:  add pagingation to api get list
- **((Object/common/pipeline, UserRoleProfile/services))**: [#BUCRM-584] search user inactive
- **(Object/(duplicate_rules,object))**: [#BUCRM-586] Edit record in duplicate rules, add duplicate rules in merger record
- **(UserRoleProfile)**: [#BUCRM-565] [FIX]: Write multi values of Privileges to log system
- **(Report)**: [#BUCRM-20] [FIX]: share_to_groups of report onchange from folder
- can not load related interaction
- can not load related interaction
- **(UserRoleProfile)**: [#BUCRM-565] [FIX]: Write multi values of Privileges to log system
- error update default view
- can not mass edit
- not update related-object when delete object
- **(Object/duplicate_rules)**: [#BUCRM-526] duplicate rules Case Insensitive
- **(Object/object)**:  add user_delete record in mass_delete
- **(Object/(duplicate_rules, field))**: [#BUCRM-572] Block field deletion when setting up duplicate rules
- not show records inside interaction when deleted
- load wrong list-view
- **(Object/(duplicate_rules, object))**: [#BUCRM-561] duplicate rules in mass_edit record
- **(Report)**: [#BUCRM-358] [FIX]: delete all reports in deleted folder
- **(Report)**: [#BUCRM-358] [FIX]: delete all reports in deleted folder
- **(formulaField)**: [#BUCRM-540] bug link to other formulaField
- **(formulaField)**:  add in_words method in datediff type
- change date format from incoming email

## 2.19.1 (2022-08-19)

### Bug Fixes

- **(DuplicateRules)**:  rm (return _id, ID record)
- wf  has change not work
- wf first time not work

## 2.19.0 (2022-08-18)

### Bug Fixes

- workflow first time not work
- workflow first time not work
- **(Object/(duplicate_rules,models))**: [#BUCRM-526] check status case sensitive characters
- **(Object/(duplicate_rules,object))**:  DuplicateRule(return: _id, ID record)
- dynamic button not trigger workflow
- **(formulaField)**: [#BUCRM-535] re-work datediff calculation
- **(sms)**: [#BUCRM-532] can not parse content from sms template

### Features

- **(SLA)**: [#UCRM-262, #UCRM-263]: Allow User to repeat SLA Escalation

## 2.18.2 (2022-08-16)

### Bug Fixes
- trigger build 08/17/2022
- dynamic button not trigger workflow
- duplicate interaction sms
- auto select lookup field value
- **(email)**:  can not assign new ticket to specific user
- **(email)**:  can not assign new ticket to specific user
- **(notificaiton)**:  fix notifications
- **(finesse)**:  add api reset finesse globally
- send noti to tagged user
- **(email)**: [#BUCRM-509] fix wrong key of dictionary
- **(email)**: [#BUCRM-509] fix wrong key of dictionary
- can not update interaction details
- **(workflow)**:  add method re-calculate formulaField when wf create/update triggerred
- **(notificaton)**: [#BUCRM-311] can not send notification to assign_to.Report_TO
- **(Campaign)**:  Missing id field of Campaign and Campaign Task in Profile
- **(role)**: [#BUCRM-389] role name can be updated
- **(formulaField)**: [# BUCRM-494] formula-field can not show value
- related record create from workflow not show in consolidated-view
- **(notification)**:  fix routing path
- **(logger)**:  fix logger
- **(Object/duplicate_rule)**:  duplicate rules when ID field None
- **(Object)**: [#UCRM-186] [FIX]: Can not tranfer data to merged record
- changelog
- linking related interaction
- **(Object)**: [#UCRM-186] [FIX]: Can not tranfer data to merged record
- check duplicate email

## 2.18.1 (2022-08-11)

### Bug Fixes

- changelog

## 2.18.0 (2022-08-09)

### Bug Fixes

- **(assignmentRule)**:  use celery to scan assigmentRule
- **(finesseInegration)**:  set timeout for token
- **(Object/duplicate_rules)**:  duplicate_rule
- allow set rule for custom-admin
- **(CrmUploadData)**: [#BUCRM-454] [IMP]: Import records with SLA and Workflow
- custom-view condition with relatec
- **(Bump version)**:  Bump version
- **(CrmUploadData)**: [#BUCRM-454] [IMP]: Import records with SLA and Workflow
-  update get list status of users
- **(daphne)**:  refactor asgi consumer
- can not add account outlook

### Features

- **(assignmentRule)**:  add backgroundjob scan  assignment rule
- **(assignmentRule)**: [#UCRM-182] add assignment-rule feature
-  add feature user online/offline

## 2.17.1 (2022-08-09)

### Bug Fixes

- **(Bump Version)**:  Trigger Bump Version
- **(CustomView)**: condition with loop-up
- **(Object/duplicate rules)**: duplicate_rules with field None
- **(Object/services)**: [#BUCRM-353] [Workflow] Has changed Workflow
- **(Custom-admin)**: set default email
- **(Custom-admin)**: custom-admin consolidate-view
- **(Object/duplicate_rules,object)**: [#BUCRM-440,BUCRM-427] DuplicateRule
- **(LogsHistory)**: [IMP]: write type of flow to logs
- **(CrmUploadData/views)**: [#BUCRM-441] Add rules duplicate import excel
- **(Object/duplicate_rules)**: remove func in duplicaterules
- **(LogSystem)**: [#BUCRM-444] [FIX]: can not search data in log system
- **(CrmUploadData)**: [#BUCRM-315] [FIX]: Can not import Dynamic field
- **(RecycleBin)**: add field user_delete_record in recycle_bin
- **(Workflow)**: workflow create record with mutiple linking field
- **(Workflow)**: worklow related record
- **(CustomView)**: show system's default view when no view 's selected
- **(KnowledgeBase/views)**: [#BUCRM-407] Setting Knowledge base
- **(CustomView)**: default custom-view
- **(Email)**: [#BUCRM-410] can not send mail to bcc list
- **(ScanEmail)**: remove blank, tab characters from body
- **(Object/services)**: [#BUCRM-353] [Workflow] Has changed Workflow
- **(Object/services)**: session in api delete_record
- **(Consolidate-view)**: create record inside timeline
- **(Object/duplicate_rules,field)**: delete field_rules in duplicate_rule
- **(Object/duplicate_rules)**: check duplicate_rules with field has value None
- **(Custom-admin)**: condition with loop-up
## 2.17.0 (2022-08-04)

### Bug Fixes:

- custom-admin
- custom-admin
- **(LogSystem)**:  [FIX]: Can not search data between 2 datetimes in log system
- custom-admin picklist
- custom admin
- **(Object/duplicate_rules)**:  update: duplicate rules
- **(Object/group)**: [#BUCRM-396] CustomAdmin/Object management
- custom-admin
- **(Object/duplicate_rules)**:  CustomAdmin-DuplicateRules
- custom-admin error
- **(LogsHistory)**:  [REF]: write_log_for_merge_record()
- **(LogsHistory)**:  [REF]: write_log_for_merge_record()
- **(Object/duplicate_rules)**:  Update CustomAdmin/DuplicateRules
- **(LogsHistory)**:  [FIX]: Can not write dynamic logs
- **(LogsHistory)**:  [FIX]: Can not write dynamic logs

### Features

- **(LogSystem)**:  [IMP]: Write custom admin to log system
- **(LogSystem)**:  [IMP]: Write custom admin to log system

## 2.16.0 (2022-08-02)

### Bug Fixes

- remove test
- **(UserRoleProfile)**: [#BUCRM-386] notification user login inactive
- **(Object/object)**: [#BUCRM-370] API update_group_setting
- custom-admin in O365
- **(ExportUsers)**:  handle records that are inactive or deleted.
- **(CrmImportUser)**:  handle records that are inactive or deleted.
- **(o365Integration)**:  wrong scope for msgraph
- **(CrmImportUser/views)**: [#BUCRM-388] CustomAdmin/User
- **(Object/urls)**:  Update: duplicate rules
- custom-admin in consolidated-view
- normal user can not set rule for others
- custom-admin in consolidated-view
- custom-admin dynamic-button
- piclist
- change message error in merge record
- can not get assign to of related record
- **(o365Integration)**:  remove test
- **(o365Integration)**:  remove test
- **(finesse)**:  add additional flow to authenticate user
- [#BUCRM-300] refactor code and add permission view mail box
- **(Report)**: [#BUCRM-354] Fix data issue when use outer fields in Or Conditions
- **(field)**: [#BUCRM-339] can not update formulaField
- **(importUsers)**:  Verify the quantity of remaining  users.
- **(importUsers)**: [#BUCRM-351] Remove meaningless log lines
- **(Report)**: [#BUCRM-361] Fix wrong pagination issues when get shared reports
- **(calendar)**: [#BUCRM-359] resolve issue relative to calendar notification
- list view details not show metadata
- **(requirements)**: update libs
- **(requirements)**: update libs
- **(UserRoleProfile)**:  [IMP]: Get value form dictionary
- **(UserRoleProfile)**:  [IMP]: improve LogSystem content
- **(o365)**:  add api o365
- **(email)**:  refactor email module
-  resolve conflict
- **(o365)**: minor change
- **(o365)**: minor change
-  pass security scanning and update env

### Features

- **(CrmUploadData)**:  [IMP]: Add write action log
- **(Object/duplicate_rules)**: [#UCRM-183] Update duplicate_rules
- **(CrmUploadData)**:  [IMP]: Add write action log
- **(email)**:  integrate outlook  xoauth2.0  to scanning email

## 2.15.0 (2022-07-28)

### Bug Fixes

- login with case-insensive
-  delete-user
- login with case-insensive
- interaction of parent-child ticket
- add custom-admin
- **(KnowledgeBase/views)**: [#UCRM-219] Update: CustomAdmin/knowledgebase
- can not view sla instances
- **(Object/Kanban)**: [#UCRM-242] Update: CustomAdmin/Kanbanview
- tranfer interation
- tranfer interation
- **(GoogleIntegration/views)**:  Update: CustomAdmin/GoogleIntegration
- **(LogsHistory)**:  [FIX]: Can not write multi values to log
- **(LogsHistory)**:  [IMP]: None value
- **(LogsHistory)**:  [IMP]: Name of variables
- **(smbproject)**:  [FIX]: restore settings.py
- **(LogsHistory)**:  [FIX]: Can not write multi values to log
- interaction
- interaction not show in relate object
- **(GoogleIntegration)**:  Update: CustomAdmin/Google
- add constains on create group setting
- missing data in interaction
- custom-admin
- **(Calendar)**:  Remove: CustomAdmin/Calendar
- **(Report)**:  Change Caching Time for Redis
- **(Report)**:  Change Caching Time for Redis
- **(Object/(field,group,object,section))**:  Update: CustomAdmin/Object management
- **(Object/group)**:  Update: CustomAdmin/Group
- **(LDAP)**: [#UCRM-220] Update: CustomAdmin/LDAP
-  update CustomAdmin/constants
-  update CustomAdmin/constants
- **(ExposeAPIs)**: [#UCRM-213] Update: CustomAdmin/ExposeAPIs
- **(RecycleBin)**:  Update Scan delete_record
- BUCRM-251 hidden object when profile is disable
-  Add domain: crmuploaddata
- **(Calendar)**: [#UCRM-207] comment CustomAdmin/Calendar

### Features

- **(Object/model)**: [#UCRM-183] Update: model duplicate_record
- **(Object/object,urls)**:  Update: API load_record_meta_data

## 2.14.0 (2022-07-21)

### Bug Fixes

- api update data from third-party
- **(UserRoleProfile)**:  [REF]: check exsit profile name
-  [FIX]: git comments
-  [IMP]: catch write logs exceptions
- **(o365)**:  format code
- **(finesse)**:  roll back to normal user when authenticate
-  remove module o365
- **(UserRoleProfile)**:  [REF]: check exsit profile name
- **(o365)**:  remove decode token method that not verified
- **(o365)**:  remove decode token method that not verified
- **(finesseIntegration)**:  change normal user to admin for authentication
- **(finesseIntegration)**:  change normal user to admin for authentication
-  resolve confict requirements
-  resolve confict requirements
- **(formulaField)**:  mutable variable change
-  email notification
- **(email)**:  refactor coding style
- api check user
- root can not create user
- **(SLA)**:  Rerun SLA Service in Celery
- dynamic button can not update record
- **(swagger)**:  set token default to swagger
- **(SLA)**: [#BUCRM-101] Improve SLA Notification Message
- **(sharing)**:  fix api edit sharing
- check user can see record comment
- can not add group
- can not comment
- **(CrmUploadData)**:  [IMP]: performance when import records

### Features

- **(o365Integration)**:  integrate outlook xoauth2.0 to send email
- **(o365Integration)**: [#UCRM-189] integrate microsoft o365 and microsoft graph to CRM
- **(o365)**:  integrate o365 to crm

## 2.13.2 (2022-07-19)

### Bug Fixes

- **(workflow)**:  could not parse related field in email template via workflow
- **(Object,LDAP)**:  Remove CustomAdmin
- **(callapi)**: [#BUCRM-282] make action status default is off
- group with custom-admin
- **(email)**:  could not store attachments
- **(UserRoleProfile/user)**:  Fix: API delete_user
- **(Object/object)**: [#UCRM-215] Update: CustomAdmin/OBJECT_LAYOUT
- **(object)**:  refactor object and improve action send email
- **(UserRoleProfile/group)**: [#UCRM-230] Update: CustomAdmin/Group
- **(Object/object)**: [#UCRM-232] Update: CustomAdmin/Criteria_Sharing
- **(CrmUploadData)**:  [FIX]: useless self-assignment
- **(LDAP/views)**: [#UCRM-220] Update: CustomAdmin/LDAP
- **(Interval)**: [#BUCRM-206] Comment out SLA Scanning
- custom-admin error message
- **(finesse)**:  call pop up improperly
- UCRM-101 dynamic button
- **(SLA)**: [#BUCRM-206] Fix SLA duplicate issues
-  [FIX]: bug write log when update records
- **(RecycleBin)**:  update field log
- can not load third-party component
- custom-admin
- **(RecycleBin,celery)**:  Update: time scan delete record
- **(RecycleBin)**:  update RecycleBin
- **(RecycleBin,celery,Interval)**:  Update: scan delete 10 tenants
-  cannot get user fullname
- **(LogsHistory)**: [#BUCRM-269] [FIX]: bug write log when mass edit records and refactor code
- **(calendar)**:  missing record id
- **(calendar)**:  cannot push notification
- **(calendar)**:  add record id to calendar notification
- integrate custom admin to profile
- **(sms)**:  sms configuration need to provide optional options.
- **(smb/celery)**:  Update: time scan delete_record
- api load all custom-admin
- api create user, edit user
- return error if update fail

## 2.13.1 (2022-07-14)

### Bug Fixes

-  **(ThirdPartyAPIs)**: [FIX]: api load third-party
-  fix: api load third-party data
-  **(UserRoleProfile/profiles)**: [#BUCRM-250] Fix: update_profile
-  **(CustomAdmin)**: [FIX]: add custom-admin domain
-  **(Finesse)**: [FIX]: invalid syntax
-  remove access_key required
-  **(Calendar)**: [FIX]: notification issues
-  **(Comment)**: [FIX]: api load comment
-  **(CustomAdmin)**: [FIX]: api toggle custom-admin
-  **(RecycleBin)**: [FIX]: update RecycleBin
-  update time delete record
-  **(DynamicButton)**: [FIX]: Refactor code and rename constants
-  **(RefactorCode)**: [FIX]: Remove unused constants

## 2.13.0 (2022-07-12)
 
### Bug Fixes

- **(Object)**:  [FIX]: Mass edit do not write log
- **(Object/object)**: [#BUCRM-222] Fix update_record
- **(smb/celery)**:  Fix:update time delete record
- **(RecycleBin)**:  Fix check_time
- **(RecycleBin)**:  Fix check_time
- **(RecycleBin/services)**:  Fix func check_time in RecycleBin
- **(Object)**:  [FIX]: field is_loggable
- **(finesse)**:  add timeout when checking ods
- **(CrmImportUsers)**:  [FIX]: clean code
- update celery delete record
- **(RecycleBin/services)**:  update: scan time delete record
- **(UserRoleProfile)**:  [FIX]: conflicts
- **(RecycleBin/services)**:  Update scan time delete record
- **(RecycleBin/server)**:  Update scan delete record
- **(Workflow, Campaign)**:  Run Workflow and Campaign with Celery
- **(UserRoleProfile/user)**:  Fix: Show all user
- bucrm-228
- **(UserRoleProfile/user)**:  Fix: update API delete user
- **(SLA)**:  Scan SLA with Celery
- **(UserRoleProfile)**:  [IMP]: Improve write log when update user profiles permissions
- bucrm-226
- **(UserRoleProfile/user)**:  update: API delete_user:delete all config user
- bucrm-127 can not edit group sharing
- **(UserRoleProfile)**:  [FIX]: null Description at Profiles Setting
- api update user

### Features

- **(CrmImportUser)**:  [IMP]: Import user
- **(UserRoleProfile)**:  [IMP]: Write log when import users


## 2.12.0 (2022-07-11)

### Bug Fixes

- **(RecycleBin)**:  Fix: RecycleBin
- **(Object, smproject)**:  [FIX]: Object, smproject
- **(SLA, ThirdPartyAPIs)**:  [FIX] import module
- **(RecycleBin)**:  fix: RecycleBin
- **(SendEmail)**:  [FIX]: ck_interval()
- **(SendEmail)**:  [FIX]: ck_interval
- **(SendEmail)**:  [FIX]: ck_interval()
- **(RecycleBin)**:  fix RecycleBin
- **(ListViewDetails)**:  fix api load list-view-details
- **(smproject)**: [#None] [FIX]: settings.py
- **(smproject)**: [#None] [FIX]: settings.py
- **(UserRoleProfile)**: [#None] [FIX]: missing update_active()
- **(UserRoleProfiles)**: [#None] [FIX]: missing get_user_privilege()
- **(importUsers)**:  refactor code
- remove recycle bin module
- resolve confict
- BUGCRM-127 can not edit group setting rule
- **(Log)**: Refactor and Improve Log for Object and Field
- **(ListViewDetails)**: [#None] [FIX]: conflicts
- api load list-view with details
- **(Log)**: Refactor and Improve Log for Object and Field
- api load list-view-with-detail
- can not load list-view-details layout
- can not load list-view-details layout
-  refactor coding style
- **(users)**:  add users import logs
- api load list-view details
- api load list-view details
- api load list-view-details
- sync data ldaps
- LDAP flows
- api load list-view-details setting
- **(email)**: [#BUCRM-186,BUCRM-194] the user's fullname was incorect, the linking fields can not be parsed in the email template.
- **(celery)**:  enable email scanner in celery configuration
- **(email)**:  allow only incoming email trigger action markread
- **(email)**:  refactor mark read
-  improve serve protection
- **(import users)**:  improve generate sample data
- **(calendar)**:  filter empty value before pass to model
- **(SLA)**:  Fix issue when using 'Contains' Conditions
- **(fomula)**:  fix bug formula
- props in ldaps model

### Features

- **(LogSystem)**: [#UCRM-180] [ADD]: LogSystem
- **(LogSystem)**: [#UCRM-180] [ADD]: LogSystem
- **(users)**:  add feature import/export users

## 2.11.0 (2022-06-30)

### Bug Fixes

- **(Tenant Configuration)**:  Return Root Role _id when clone Tenants
- **(swagger)**:  refactor swagger
- **(email)**:  add option select another object mail setting to send email

### Features

-  add user list import features

## 2.10.1 (2022-06-28)

### Bug Fixes

- [#BUG-1234] config cz

## 2.10.0 (2022-06-28)

### Bug Fixes

- roll back urls.py
- roll back urls.py
- format celery
- **(calendar)**: replace wrong variable
- **(calendar)**: remove empty filter
- **(calendar)**: refactor code and remove test data
- **(calendar)**: improve email template
- update group sharing when delete group
- duplicate rule in group sharing setting
- minor change
- **(knowledgebase)**: The API response does not provide the required information.
- **(calendar)**: refactor path api
- **(email)**: fix extend list cc to list recipients
- **(calendar)**: refactor coding style
- **(calendar)**: auto add owner to list guests
- refactor code
- **(calendar)**: improve filter calendar event
- **(swagger)**: add enum to items in array
- password length must be larger than 8

### Features

- **(calendar)**: add scan upcoming event by celery
- **(calendar)**: add notification to calendar
- **(calendar)**: add features that create repeat event

## 2.9.0 (2022-06-23)

### Bug Fixes

- **(finesse)**: write recording url always
- **(calendar)**: add filter to get calendar event
- **(object)**: add custom field date and datetime schema
- **(swagger)**: add custom query string to swagger
- bug 115 can not delete record
- **(knowledgebase)**: add start date and end date to get articlie data
- **(Summary Report)**: Sort column and row header
- **(Report)**: Refactor code and fix issue when edit report
- **(role)**: add constrains when delete role
- api linking
- **(tenants)**: get list tenant does not return newest records
- api load favorite object
- **(email)**: fix can not parse metadata of record in email templates
- can not update, delete active button
- hide off object in list-view
- refactor code
- **(Summary Report)**: Fix issue when hiding Percentage value
- add permission to calendar events
- refactor swagger
- add emum to swagger
- reply's order in comment
- **(Campaign)**: Fix SMS issue

### Features

- **(Summary Report)**: Show/Hide Grand Total, Remove rows with all zeros

## 2.8.0 (2022-06-21)

### Bug Fixes

- add authorization method in page logs view
- **(calendar)**: minor changes for calendar alerts
- decode token with sso
- can not update config cti
- send noti
- send noti duplicate
- duplicate notification
- can not send notification to comment owner
- api comment
- notifcation message when reply, comment
- workflow has change not work

### Features

- **(calendar)**: add module calendar

## 2.7.4 (2022-06-19)

### Bug Fixes

- can not open consolidate-view when open noti
- can not delete comment
- api unlike
- can not update reply
- **(sms)**: fix missing header when sending requests
- api delete comment
- comment pagination
- **(Summary Report)**: Fix NaN Issues when calculate in percentage
- add event update voice biometric customer
- add api check interaction
- **(Summary report)**: Show measure value by decimal places
- api udpate ic setting
- **(tenants)**: minor change for ISO requirements
- api interation comment
- **(tenant)**: include field search in pagination
- api comments

## 2.7.3 (2022-06-15)

### Bug Fixes

- version

## 2.7.2 (2022-06-13)

### Bug Fixes

- **(tenants)**: fix cannnot enable tenant
- disable ldaps
- ldap setting
- **(knowledgebase)**: add try catch err if no index found.
- ldap setting
- **(User)**: not showing fullname if middle name is null
- ldap sync deleted config
- **(SendEmail)**: list email in bcc alway display
- can not create ldap
- api create comment
- fix model
- **(finesse)**: set timeout when call 3rdparty
- **(finesse)**: change api get statuscode
- **(getUserDetails)**: update voice biometric integration using flag
- fix logger and base meta model
- refactor logs
- refactor log
- **(email)**: disable send error to email
- **(exposeAPI)**: add token to authentication
- **(email)**: remove validation on ssl_type
- **(tenants)**: fix pagination
- **(tenants)**: add pre_load to format data
- **(tenants)**: rm empty pwd
- refactor code
- **(tenants)**: fix permission
- convert jw.decode to decode_token
- **(tenants)**: fix wrong role for superadmin
- **(voicebiometricIntegration)**: migrate feature from ver 1 to ver 2
- **(user)**: add permission of user root to get-user-details api

## 2.7.1 (2022-06-08)

### Bug Fixes

- **(tenants)**: update audit logs when update tenant

## 2.7.0 (2022-06-08)

### Bug Fixes

- **(tenants)**: add encrypt password
- api load all user
- fix not show email user root
- **(user)**: rollback check user loggin
- **(tenants)**: add method for generating root permission when logged in
- **(email)**: remove admin permission required when mark read email
- update ldap model
- can not reset password
- change md5 to sha256

### Features

- **(tenants)**: add audit log

## 2.6.0 (2022-06-06)

### Bug Fixes

- **(tenants)**: refactor coding style
- update swagger utils
- **(tenants)**: refactor coding style
- **(utils)**: format validation error
- **(tenants)**: update current active user in tenant to response data
- **(utils)**: add check root user to decorator
- **(utils)**: pass HttpResponse data in func handle_success
- pagination
- can not sync data

### Features

- **(tenants)**: add crud user root permission api
- **(tenants)**: add method update tenant conf

## 2.5.7 (2022-06-03)

### Bug Fixes

- **(IC)**: add return value from create record action
- **(Import)**: Show Required Fields in Import Template

## 2.5.6 (2022-06-02)

### Bug Fixes

- load linking-field-values
- **(finesseIntegration)**: update new method to get current agent status
- api load linking field

## 2.5.5 (2022-06-01)

### Bug Fixes

- **(SLA)**: Check running instances when remove SLA Setting
- **(email)**: add api url
- **(email)**: refactor code
- refactor coding style
- **(email)**: refactor coding style
- **(email)**: remove required permission when get list outgoing config
- **(SLA)**: Allow to set up SLA Deviation from file env
- can not send email
- link reset password
- update msg error

## 2.5.4 (2022-05-31)

### Bug Fixes

- **(Campaign)**: Allow to edit Task Rule when editing Campaign
- can not load related data bbetween object

## 2.5.3 (2022-05-31)

### Bug Fixes

- **(googleintegration)**: not found salt string value to decoded token
- **(email)**: missing from property
- not handle empty array
- ignore schedule db
- update gitignore
- can not delete active highlight setting
- can not update tab component
- refactor coding style
- add invalid data filter
- remove test
- api mass-edit

## 2.5.2 (2022-05-26)

### Bug Fixes

- refactor code
- remove credential_id when fetching google account
- user root can not edit  record
- migrate token to env file
- user root can not mass-delete,mass-update record
- error message in mass-delete
- error message when mass edit
- action create record not run
- remove generic api key

## 2.5.1 (2022-05-25)

### Bug Fixes

- refactor conf

## 2.5.0 (2022-05-19)

### Bug Fixes

- update path of version file
- implement markdown to check version
- update markdown library

### Features

- Improve cache

## 2.4.2 (2022-05-15)

### Bug Fixes

- update path of version file
- implement markdown to check version
- update markdown library
- migrate file to smbproject folder

## 2.4.1 (2022-05-13)

### Bug Fixes

- exclude bump files in pre-commit config

## 2.4.0 (2022-05-13)

### Bug Fixes

- update precommit file

### Features

- add commitizen

## 2.3.5 (2022-05-13)

### Bug Fixes

- show field is empty
- api load linking value
- bug11076
- bug11085 edit modifi by to Modidied by
- bug11090 root user can not see record assiged to other user when create
- can update duplicate rule
- sonarlint issues
- api load javorite object
- disable csrf_extemp
- sonarlint issues
- load linking field value
- not showing object-related-name
- modify time not show in list-view
- can not show critera-base sharing setting
- can not search in linking list
- error in sharing
- can not load record shared by other groups
- can not apply custom-view inside consolidate-view
- hidden profile of object disable
- status code, error message when email already register
- api load consolidated-view layout
- change name in component not reflect in consolidate-view
- BUG10871
- can not delete picklist
- bug1034 sort  data by created_date
- list view not show full data
- can not load action send-email
- load form create
- error in decode token
- field hidden but still show in list-view
- can not load picklist
- can not load component
- bug 100509
- missing field in load-form-create
- can not create field textarea
- remove request body if field deleted
- can not create component type tab
- none type search stage
- pagination error
- action in workflow
- can not update dynamic button
- can not update action send-email
- update prefix in object not refelect in field
- not show data of related record
- error none type
- update dynamic button not work
- can not update object label
- api load data list-view
- load data in related-object
- missing field in IC config model
- update tab component not reflect in layout
- syntax error
- can not load detail-component
- pagination popup
- position in list-view
- position of meta-field in list-view
- position of meta-field in list-view
- now show meta-field on listview
- now show meta-field on listview
- email is not field mutiple
- can not update object group
- can not update popup url
- api load data list-view
- can not load related-record
- can not delete custom-view
- missing field-id in load-form-create
- hide profile of deleted object
- update duplicate object name
- error writing interaction when send email
- missing object group in sidebar
- api load all object
- sort field by position in form merge record
- short delete object setting
- rename read_only to readonly
- api check token
- function validate user
- missing id in profile-field
- remove duplicate function get_valid_user
- import module error
- pipeline must be a list
- can not update object's field
- can not load linking field value
- missing field_id in profile-field
- position profile field not work
- can not update object's group
- handle_error function
- listview not show field ID
- can not update field id
- can not update object's field
- can create object with same name
- can not update field select
- can not delete object's group
- field show in list-view when disable in profile
- api update profile-field
- can not update field assign to
- remove empty dict when not have profile
- can not create group
- can not load dynamic-button
- hide the hidden field in listview
- can not display meta data in listview
- can not load list view when not create field
- api load criteria base sharing
- api load criteria base sharing
- list-view url
- can not load list-view data when middle name is None
- action workflow model
- filter inside component not work
- can not load component data
- load data in component with list-view
- Advance config CTI model
- api load third-party data
- can not delete custom-view:
- can not create custom-view
- api update dynamic action
- api load data listview
- api load related record
- can not load data in consolidated-view
- api load-picklist-target
- error pipeline must be list
- api load related-field
- can not update object group
- Component model
- error  get-criteria-sharing-setting
- missing show_fields when load component
- missing show_fields when load component
- can not delete component
- can not delete component
- can not delete component
- can not update dynamic-field
- can not delete group-sharing-setting
- can not load linking field value
- api create-picklist
- api create piclist
- check none before update picklist's target
- change field's name
- revert field name to v1
- change from label_name to name
- api create piclist
- load-profile details
- can not load custom-view
- can not insert record with field file
- None string when data is empty ods's record
- convert number to string when update ods'record
- spare backsquash in layout consolated-view
- can not update in consolated-view layout
- can not update record's ods
- update consolated-view layout
- BUG10381 wrong datetime format
- BUG10175 can not update record with related assign to
- BUG10468 can not edit re lated record
- can not create new cti config
- can not add button with same name in diffferent object
- update customer not work
- duplicate field assign to
- load config details not work
- can not create record with ODS
- disable group, user still display
- deleted user, group still display
- change email subject when reset passsword
- access by not show in dynamic-button
- missing Email in token
- error in custom-view pipeline
- duplicate interaction in email
- error return json to string
- popup not work
- error in update popup-setting
- error query data
- check object right when load component data
- check empty body in post method
- missing data in post method
- action in send email
- error duplicate interaction of email
- duplicate interaction in timeline
- rename api-url
- rename api-url
- consolated-view not show meta data
- dynamic button not run
- error in wf update record
- search field user in list-view
- allow  special chars in email validation
- write log when update record
- get data from related record in consolated-view
- wf-first-time condition is true change flow
- consolated-view with related object not show data
- wf create record not work with type number
- not loading meta-field in api load-record-data
- error not show sharing data in component table
- check object, field to be display in component
- get record data by user role, profile
- remove object-cti from cti config
- error can not create record with related-owner
- error can not create record with related-owner
- check record exist in db-ft
- error when check delete right
- popup pagination not work
- handle null consolated-view layout
- disable check right in load-form-create
- show button for record sharing by group
- use marshmallow's method to validate email
- higher user can not edit record of lower user
- error when merge record
- errror when merge record
- errror when merege record
- wf update record with value is assign-to
- nonetype error
- check right of merged record
- error when merge record
- error when merge record
- error in criteria-base sharing
- pagination not work in load-target-data
- pagination not work in load-target-data
- error in generate cti-url
- validate interaction data when update
- show child tiket of parent ticket in consolated-view
- pagination not work
- remove related-field in load-object-target
- api get-realted-data
- criteria-base-sharing with write priviledege
- wf create record not work
- wf not work
- remove commentted code
- change status on call
- update newest match record
- error when no request in create-recrod
- add tenant id to background job
- interaction cause error in send sms
- interaction cause error in send sms
- interaction cause error in send sms
- not show field asign to
- can not load action details sms
- generate interaction for related record
- add log when field assign-to change
- add field owner in logs
- change way to save note
- disable write log function
- workflow create, update not work
- add note to interaction data\
- add note to interaction data\
- can not load action send notif
- dynamic button filter not working
- update generate id function
- Add dialog ID
- wrong position on merge record, mass-edt
- can not run noti
- default-listview with mutiple field
- create record auto mapping default value when value is not empty
- create record auto mapping default value when value is not empty
- level2 can not edit level 3 record
- error load butotn in list-view
- return none if use not found
- button default status is disable
- add default value for record created workflow
- add default value for record created workflow
- sort buttons, action
- sort buttons, action
- can not edit action create-notification
- add default value when create record
- update
- can not update action
- change from _id to action_id
- button model
- can not delete record created-by system
- list view not work
- list-view
- in list view{
- load data in list-view
- error can not load field update
- error when check priviledge
- can not create record
- can not searh is_admin field
- add function to create token
- update consolated-view settting
- consolate-view
- consolated-view condition:
- add meta_filter when update
- update component
- can not load component type tab
- fix field name in create default custom-view
- display user name in list-view instead id
- display user name in list-view instead id
- error when load popup
- error when load popup
- error when load list-view
- fix consolated-view
- consolated-view
- write-log
- error meta_field not show
- error when mass-edit
- error when update record
- error in create record
- unable consolated-view url
- error when validte input type select
- mass-edit
- error when validate data
- validation error
- error when pagination custom-view
- Fix error when merge record
- insert data when required-field is none
- popup setting
- fix consolated-view
- consolated-view
- missing lib
- can not update assign to
- update
- search in consolated-view
- fix bug
- add left component, right component
- fix list-view bug
- update field not work
- search wroong
- Add object Name when load component
- Error when load custom-view
- False result in condition in linking object
- Improve list-view performance
- Higher level user can not edit record of lower

### Features

- filter data in consolidated-view component use list-view's filter
- add api upate reocord with 3rd data
- add api create record with 3rd data
- change way to query data from 3rd phone number
- change response data when change-status
- change status CTI
- disable ssl in request
- update settiing in third-party-apis
- get error from third-party-api
- add api get-list-status code
- update api model
- email scan workflow
- working on integrate with third party api
- add validation for authen type
- add api update setting
- add api create third-party-apis setting
- init third-party-apis project
- add decorator to process request
- wf udpte record with root record
- wf create record from original record
- get related record when root record change vlaue
- update record with data from object related
- wf create recrod with main object owner
- remove object_cti from config
- change flow of wf-first-time
- change flow of wf-first-time
- Update api get data from vbee
- change cti url
- feat: wf with related-record
- fix critera base sharing not work
- remove port from CTI model
- link child ticket with parent ticket
- add realted-field when load object target
- udpate interaction
- Update interaction
- combine all integration update to one
- add interation for target object
- add api get field click to call
- check email config
- related condition
- add info on get-vbee-setting
- related-object conditon
- update
- update interaction sms
- add more info on sms
- add objectname, tenant-name on vbee-setting
- add api get realtime status
- integrate with vbee
- integrate with conference
- add interaction when reply, send, forward email
- add interaction for email
- fix error load details in criterial-sharing
- crete interaction for emai;
- add interaction when send email
- create interaction for sms
- start app interaction
- create sms integration
- add func to format sms reponse
- add write log for wf update
- add write log for create record in workflow
- add api conference fineese
- working con fineese:
- integrate with finesse
- udpate
- integreate with fineses
- disable ssl verification
- Demo decorator
- Demo decorator
- Update Config CTI model
- working on popup with predefine return value
- add api load popup, return field
- working on dynamic-button
- working on call center
- add api load-all-action, run-button, toggle-action
- convert condition to string insde model
- add api run button
- execute all button action if satify condition
- dynamic button-setting
- Push end-call notitifcation when noanswer
- add dynamic buttton
- filter with linking object
- update dynamic button model
- check duplicate section name
- add field name when get logs
- add field name when get logs
- add pagination info for get logs
- get changes-log of record
- gen pipline for workflow
- write log when delete a record
- log when update record
- parse filter_consition on return
- update write log
- Check priviledge before mass-edit, mass update
- Check right in edit, delete
- add func to get user profile
- add function to update record with token
- add fucntion to insert record with token only
- popup return custom-error
- pop up from url
- admin update password
- return pagination info for consolated-view
- admin update password for other user
- Change user password
- Write log for import data
- log for mass_edit
- fix pop up setting
- log for merge-record
- write log for merge record
- log for mass delete
- Popup setting
- add write log with type delete
- improve speed in list view
- update consolated-view model
- update consolated-view model
- update consolated-view model
- update consolated-view model
- update consolated-view model
- update consolated-view model
- update consolated-view model
- Improvie performance list-view
- Improve performance custom-view
- Improve performance custom-view
- improve list-view performnace
- Improve performance list-view
- Add filter for type tags, table
- Add api for update consolated-view layout
- Add api create consolidated-view layout
