angular.module("playerApp.config", [])
.constant("config", {"SITE":{"DEFAULT_LANGUAGE":"en"},"URL":{"BASE_PREFIX":"service/","LEARNER_PREFIX":"v1/learner/","CONTENT_PREFIX":"v1/content/","CONFIG_BASE":"http://localhost:4000/api/sb/v1/","PAGE_PREFIX":"data/v1/page/assemble","USER":{"RESOURCE_BUNDLE":"resourcebundle","SIGNUP":"user/v1/create","UPDATE_USER_PROFILE":"user/v1/update","GET_PROFILE":"user/v1/read","TENANT_LOGO":"get/tenant/logo"},"COMPOSITE":{"SEARCH":"composite/v1/search"},"COURSE":{"SEARCH":"course/v1/search","CREATE":"course/v1/create","UPDATE":"course/v1/update","REVIEW":"course/v1/review","PUBLISH":"course/v1/publish","GET":"course/v1/get","GET_MY_COURSE":"course/v1/get/mycourse","HIERARCHY":"course/v1/hierarchy","USER_CONTENT_STATE":"course/v1/content/state","USER_CONTENT_STATE_READ":"course/v1/content/state/read","USER_CONTENT_STATE_UPDATE":"course/v1/content/state/update","GET_ENROLLED_COURSES":"course/v1/user/enrollment/list","GET_LEARN_OTHER_SECTION":"Course","ENROLL_USER_COURSE":"course/v1/enrol","RECOMMENDED_COURSE":"recommended/courses"},"CONTENT":{"SEARCH":"content/v1/search","CREATE":"content/v1/create","UPDATE":"content/v1/update","REVIEW":"content/v1/review","PUBLISH":"content/v1/publish","UPLOAD_MEDIA":"content/v1/media/upload","GET":"content/v1/read","GET_MY_COURSE":"content/v1/get/mycontent","UPLOAD":"content/v1/upload","RETIRE":"content/v1/retire","REJECT":"content/v1/reject","FLAG":"content/v1/flag","ACCEPT_FLAG":"content/v1/flag/accept","DISCARD_FLAG":"content/v1/flag/reject","UPLOAD_URL":"content/v1/upload/url/read"},"NOTES":{"SEARCH":"notes/v1/search","CREATE":"notes/v1/create","UPDATE":"notes/v1/update","GET":"notes/v1/read","DELETE":"notes/v1/delete"},"RESOURCE":{"GET":"Resource"},"ROLES":{"READ":"data/v1/role/read"},"BATCH":{"CREATE":"course/v1/batch/create","UPDATE":"course/v1/batch/update","ADD_USERS":"course/v1/batch/user/add","REMOVE_USERS":"course/v1/batch/users/remove","GET_DETAILS":"course/v1/batch/read","GET_BATCHS":"course/v1/batch/list"},"ADMIN":{"USER_SEARCH":"user/v1/search","ORG_SEARCH":"org/v1/search","BULK":{"USERS_UPLOAD":"user/v1/upload","ORGANIZATIONS_UPLOAD":"org/v1/upload","STATUS":"data/v1/upload/status"},"DELETE_USER":"user/v1/block","UPDATE_USER_ORG_ROLES":"org/v1/role/assign"},"BADGE":{"GET":"org/v1/badges/list","ASSIGN":"user/v1/badges/add"}},"FILTER":{"RESOURCES":{"languages":["Bengali","English","Gujarati","Hindi","Kannada","Marathi","Punjabi","Tamil","Telugu"],"contentTypes":["Collection","Story","TextBook","Worksheet"],"subjects":["Assamese","Bengali","English","Gujarati","Hindi","Kannada","Malayalam","Marathi","Maths","Nepali","Oriya","Punjabi","Tamil","Telugu","Urdu"],"boards":["NCERT","CBSE","ICSE","MSCERT"]}},"MESSAGES":{"AUTH":{"LOGIN":{"FAILED":"invalid username and password"},"LOGOUT":{"FAILED":"Logout failed"}},"COMMON":{"ERROR":"error","INFO":"info","WARNING":"warning","SUCCESS":"success"},"RESOURCE":{"PAGE":{"START":"We are fetching content...","FAILED":"Fetching content failed, please try again later..."}},"COURSE":{"ENROLLED":{"START":"We are fetching enrolled courses...","FAILED":"Fetching enrolled courses failed, please try again later..."},"PAGE_API":{"START":"We are fetching data...","FAILED":"Fetching other courses failed, please try again later..."},"TOC":{"START":"We are fetching course details...","ERROR":"Unable to get course schedule details."},"ENROLL":{"START":"Enrolling....","ERROR":"Cannot enroll now.Try again later"}},"HOME":{"ENROLLED":{"START":"We are fetching enrolled courses...","FAILED":"Fetching enrolled courses failed, please try again later..."},"PAGE_API":{"START":"We are fetching data...","FAILED":"Fetching other courses failed, please try again later..."}},"PROFILE":{"HEADER":{"START":"processing...","FAILED":"Fetching profile failed, please try again later...","UPDATE":"Updating user profile failed,please try again later...","UPDATE_SUCCESS":"successfully updated profile "}},"SEARCH":{"COURSE":{"START":"We are fetching profile...","FAILED":"Fetching courses failed, please try again later...","NO_RESULT":"No result found "},"RESOURCE":{"START":"We are fetching profile...","FAILED":"Fetching resources failed, please try again later...","NO_RESULT":"No result found "}},"COLLECTION":{"PREVIEW":{"START":"Fetching data for you....","FAILED":"Unable to load data."}}},"ekstep_CE_config":{"context":{"content_id":"","sid":"sunbird_sid","baseURL":"","editMetaLink":"","uid":"sunbird_uid","channel":"sunbird_channel","dimension":"sunbird_dims","etags":"etags","user":{"id":"","name":"","email":""}},"config":{"baseURL":"","pluginRepo":"/content-plugins","plugins":[{"id":"org.ekstep.telemetry","ver":"1.0","type":"plugin"},{"id":"org.sunbird.header","ver":"1.0","type":"plugin"},{"id":"org.ekstep.config","ver":"1.0","type":"plugin"},{"id":"org.ekstep.stage","ver":"1.0","type":"plugin"},{"id":"org.ekstep.text","ver":"1.0","type":"plugin"},{"id":"org.ekstep.shape","ver":"1.0","type":"plugin"},{"id":"org.ekstep.image","ver":"1.0","type":"plugin"},{"id":"org.ekstep.audio","ver":"1.0","type":"plugin"},{"id":"org.ekstep.hotspot","ver":"1.0","type":"plugin"},{"id":"org.ekstep.scribblepad","ver":"1.0","type":"plugin"},{"id":"org.ekstep.assessmentbrowser","ver":"1.0","type":"plugin"},{"id":"org.ekstep.quiz","ver":"1.0","type":"plugin"},{"id":"org.ekstep.preview","ver":"1.0","type":"plugin"},{"id":"org.ekstep.assetbrowser","ver":"1.0","type":"plugin"},{"id":"org.ekstep.colorpicker","ver":"1.0","type":"plugin"},{"id":"org.ekstep.stageconfig","ver":"1.0","type":"plugin"},{"id":"org.ekstep.unsupported","ver":"1.0","type":"plugin"},{"id":"org.ekstep.viewecml","ver":"1.0","type":"plugin"},{"id":"org.ekstep.activitybrowser","ver":"1.0","type":"plugin"},{"id":"org.ekstep.download","ver":"1.0","type":"plugin"},{"id":"org.ekstep.collaborator","ver":"1.0","type":"plugin"},{"id":"org.ekstep.readalongbrowser","ver":"1.0","type":"plugin"},{"id":"org.ekstep.wordinfobrowser","ver":"1.0","type":"plugin"},{"id":"org.ekstep.utils","ver":"1.0","type":"plugin"},{"id":"org.ekstep.help","ver":"1.0","type":"plugin"}],"enableCorePlugin":false}},"ekstep_CP_config":{"context":{"mode":"play"},"config":{"showEndPage":false,"showStartPage":true,"host":"","apislug":"/action","repos":["/content-plugins/renderer"],"plugins":[{"id":"org.sunbird.iframeEvent","ver":1,"type":"plugin"},{"id":"org.sunbird.player.endpage","ver":1,"type":"plugin"}]},"baseURL":"/content/preview/preview.html?webview=true"},"DROPDOWN":{"COMMON":{"languages":["Bengali","English","Gujarati","Hindi","Kannada","Marathi","Punjabi","Tamil","Telugu"],"lessonTypes":["Story","Worksheet"],"subjects":["Assamese","Bengali","English","Gujarati","Hindi","Kannada","Malayalam","Marathi","Maths","Nepali","Oriya","Punjabi","Tamil","Telugu","Urdu"],"grades":["Kindergarten","Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6","Grade 7","Grade 8","Grade 9","Grade 10","Grade 11","Grade 12","Other"],"audiences":["Learner","Instructor"],"ageGroup":["<5","5-6","6-7","7-8","8-10",">10","Other"],"medium":["Assamese","Bengali","English","Gujarati","Hindi","Kannada","Malayalam","Marathi","Nepali","Oriya","Other","Punjabi","Tamil","Telugu","Urdu"],"boards":["CBSE","ICSE","MSCERT","NCERT"]}},"collection_Editor_Config":{"TextBook":{"context":{"uid":"","contentId":"","sid":"0d5b94c87052869b58e47ec692f467cd","channel":"ntp/ap","pdata":{"id":"SunbirdPortal","ver":"1.0"},"dims":["b27e743b51a22b4eed737c6a72cd4266"]},"mode":"Edit","rules":{"levels":3,"objectTypes":[{"type":"TextBook","label":"Textbook","isRoot":true,"editable":true,"childrenTypes":["TextBookUnit"],"addType":"Editor","iconClass":"fa fa-book fa-2"},{"type":"TextBookUnit","label":"Textbook Unit","isRoot":false,"editable":true,"childrenTypes":["TextBookUnit","Collection","Story","Game","Worksheet"],"addType":"Editor","iconClass":"fa fa-folder fa-2"},{"type":"Collection","label":"Collection","isRoot":false,"editable":false,"childrenTypes":[],"addType":"Browser","iconClass":"fa fa-file fa-2"},{"type":"Story","label":"Story","isRoot":false,"editable":false,"childrenTypes":[],"addType":"Browser","iconClass":"fa fa-file fa-2"},{"type":"Worksheet","label":"Worksheet","isRoot":false,"editable":false,"childrenTypes":[],"addType":"Browser","iconClass":"fa fa-file fa-2"},{"type":"Game","label":"Game","isRoot":false,"editable":false,"childrenTypes":[],"addType":"Browser","iconClass":"fa fa-file fa-2"}]},"defaultTemplate":{}},"Collection":{"context":{"uid":"","contentId":"","sid":"0d5b94c87052869b58e47ec692f467cd","channel":"ntp/ap","pdata":{"id":"SunbirdPortal","ver":"1.0"},"dims":["b27e743b51a22b4eed737c6a72cd4266"]},"mode":"Edit","rules":{"levels":3,"objectTypes":[{"type":"Collection","label":"Collection","isRoot":true,"editable":false,"childrenTypes":["Collection","Story","Game","Worksheet"],"addType":"Browser","iconClass":"fa fa-file fa-2"},{"type":"Story","label":"Story","isRoot":false,"editable":false,"childrenTypes":[],"addType":"Browser","iconClass":"fa fa-file fa-2"},{"type":"Worksheet","label":"Worksheet","isRoot":false,"editable":false,"childrenTypes":[],"addType":"Browser","iconClass":"fa fa-file fa-2"},{"type":"Game","label":"Game","isRoot":false,"editable":false,"childrenTypes":[],"addType":"Browser","iconClass":"fa fa-file fa-2"}]},"defaultTemplate":{}}},"TELEMETRY":{"MAX_BATCH_SIZE":20,"SYNC":"data/v1/telemetry"},"CURRENT_USER_ROLES":["CONTENT_REVIEWER"],"COMMON_ROLES_CHECK":["CONTENT_CREATOR","CONTENT_REVIEW","CONTENT_CREATION","CONTENT_REVIEWER"],"WORKSPACE_ACCESS_ROLES":["CONTENT_CREATOR","CONTENT_REVIEW","CONTENT_CREATION","CONTENT_REVIEWER","FLAG_REVIEWER"],"CreateLessonMimeType":"application/vnd.ekstep.ecml-archive","CreateCollectionMimeType":"application/vnd.ekstep.content-collection","MimeTypeExceptCollection":["application/pdf","video/mp4","video/x-youtube","application/vnd.ekstep.html-archive","video/youtube","application/vnd.ekstep.ecml-archive","application/epub","application/vnd.ekstep.h5p-archive"],"MaxFileSizeToUpload":25600000,"FileExtensionToUpload":"application/pdf, video/mp4, application/zip, video/webm","AllowedFileExtension":["mp4","pdf","zip","epub","h5p"],"USER_ROLES":["ORG_ADMIN","ORG_MEMBER","CONTENT_REVIEW","CONTENT_CURATION","CONTENT_REVIEWER","CONTENT_CREATION","CONTENT_CREATOR","ORG_MODERATOR","MEMBERSHIP_MANAGEMENT","ORG_MANAGEMENT","SYSTEM_ADMINISTRATION","ADMIN","SYSTEM_ADMIN"],"searchTypeKeys":["Courses","Resources","Users","Organisations"],"sortingOptions":[{"field":"lastUpdatedOn","name":"Updated On"},{"field":"createdOn","name":"Created On"}],"searchSelectionKeys":[{"id":"All","name":"All"},{"id":"Courses","name":"Courses"},{"id":"Resources","name":"Resources"},{"id":"Organisations","name":"Organisations"},{"id":"Users","name":"Users"}],"contributeContentType":["Collection","Story","Worksheet","TextBook","Course","LessonPlan"],"MIME_TYPE":{"pdf":"application/pdf","mp4":"video/mp4","youtube":"video/x-youtube","pYoutube":"video/youtube","html":"application/vnd.ekstep.html-archive","ecml":"application/vnd.ekstep.ecml-archive","ePub":"application/epub","h5p":"application/vnd.ekstep.h5p-archive"}});
