export let serviceOnOff = true;

export function sleep(m: number) {
  return new Promise((r) => setTimeout(r, m));
}
