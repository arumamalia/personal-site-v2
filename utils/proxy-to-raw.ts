export default function (data: unknown) {
  return JSON.parse(JSON.stringify(data));
}
