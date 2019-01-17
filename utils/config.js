//服务器地址
var url = 'www.2belief.com'
//腾讯云对象存储鉴权地址
var cosSignatureUrl = 'https://tunnel.ws.qcloud.la';
//腾讯云对象存储的区域：华东地区为sh
var cosRegion = 'ap-beijing1';
//腾讯云对象存储cos的APPID
var cosAPPID = '1257300696';
//腾讯云COSSecretId
var cosSecretId = 'AKID6LLO3y6kraCwfngcw7RWkcaI8PYxIKLC';
//腾讯云COSSecretKey
var cosSecretKey = 'xiGfdtBIUdSDMHY35kDfPzTZuhgThG8w';
//bucket
var cosBucketName = 'qcloudtest';
//dir路径
var cosDirName = '';

module.exports = {
  url: url,
  cosSignatureUrl: cosSignatureUrl,
  cosRegion: cosRegion,
  cosAPPID: cosAPPID,
  cosBucketName: cosBucketName,
  cosDirName: cosDirName
}