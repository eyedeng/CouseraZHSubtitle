/**
 * 字幕显示位置：<video>里的<track>
 * <track kind="captions" label="English" 
 *  src="/api/subtitleAssetProxy.v1/w9s5wpaKSx-bOcKWihsfag?expiry=1681862400000&amp;hmac=1KuS86SlPE_RrB9_9nBnmdjOI7OtHGGwKIfJiZDuX3I&amp;fileExtension=vtt" 
 *  srclang="en">
 */

// 获取包含英文字幕的track元素
const trackElement = document.querySelector('track[kind="captions"][srclang="en"]');

// 更改src属性为您的中文字幕文件的URL
trackElement.src = 'https://raw.githubusercontent.com/eyedeng/CouseraZHSubtitle/main/vtt/subtitles-zh-CN.vtt';

// 更新字幕轨道的label和srclang属性
trackElement.label = '中文';
trackElement.srclang = 'zh-CN';

// 重新加载视频，以便更新字幕轨道
const videoElement = document.querySelector('video');
videoElement.load();
