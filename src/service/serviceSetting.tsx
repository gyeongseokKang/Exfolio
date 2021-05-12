export let serviceOnOff = false;

export function sleep(m: number) {
  return new Promise((r) => setTimeout(r, m));
}
