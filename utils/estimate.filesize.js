export function estimateFileSize(bytes) {
  let size, label;

  if (bytes < 1000) {
    size = bytes.toFixed(2);
    label = "B";
  } else if (bytes < 1000000) {
    size = (bytes / 1000).toFixed(2);
    label = "KB";
  } else if (bytes < 1000000000) {
    size = (bytes / 1000000).toFixed(2);
    label = "MB";
  } else {
    size = (bytes / 1000000000).toFixed(2);
    label = "GB";
  }

  return `${size} ${label}`;
}
