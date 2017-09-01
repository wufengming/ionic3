export const APPVERSION='0.1.0'

export const APP_SERVE_URL = 'http://88.128.18.144:8081/api/';

/*----------------------------------------文件服务器地址----------------------------------------*/
export const FILE_SERVE_URL = 'http://172.16.19.86/kit_file_server/';//文件服务:测试环境

/*----------------------------------------app版本升级服务地址----------------------------------------*/
export const APP_VERSION_SERVE_URL = 'http://172.16.19.86:8111/api/';//app版本升级服务;测试环境,查询app最新版本号,更新日志等信息.

export const IS_DEBUG = true;//是否开发(调试)模式

export const DEFAULT_AVATAR = './assets/img/avatar.png';//用户默认头像
export const PAGE_SIZE = 5;//默认分页大小
export const IMAGE_SIZE = 1024;//拍照/从相册选择照片压缩大小
export const QUALITY_SIZE = 94;//图像压缩质量，范围为0 - 100
export const REQUEST_TIMEOUT = 12000;//请求超时时间,单位为毫秒

/*----------------------------------------fundebug-javascript----------------------------------------*/
export const ENABLE_FUNDEBUG = false;//是否启用fundebug日志监控
export const FUNDEBUG_API_KEY = 'e11b9e738d661cd1d709eb72c5422b831e657b4385951f194ab4485f9eea43e6';//去https://fundebug.com/申请key



export const APK_DOWNLOAD = 'http://omzo595hi.bkt.clouddn.com/ionic2_tabs.apk';//android apk下载完整地址,用于android本地升级
export const APP_DOWNLOAD = 'http://omzo595hi.bkt.clouddn.com/download.html';//app网页下载地址,用于ios升级或android本地升级失败


