/**
 * Some predefined delay values (in milliseconds).
 */
export enum Delays {
  Short = 500,
  Medium = 2000,
  Long = 5000,
}

// hello-test
// add test
// v2.0.1
// v2.0.1 release test
// v3.0.0 rc1
// v4.0.0 rc2
// v5.0.0 rc2
// add
// test2
// rc2

//5.0.0
/**
 * Returns a Promise<string> that resolves after a given time.
 *
 * @param {string} name - A name.
 * @param {number=} [delay=Delays.Medium] - A number of milliseconds to delay resolution of the Promise.
 * @returns {Promise<string>}
 */
function delayedHello(
  name: string,
  delay: number = Delays.Medium,
): Promise<string> {
  return new Promise((resolve: (value?: string) => void) =>
    setTimeout(
      () => resolve(`Hello, ${name} I'm semantic release and chore`),
      delay,
    ),
  );
}

// Below are examples of using ESLint errors suppression
// Here it is suppressing a missing return type definition for the greeter function.

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function greeter(name: string) {
  return await delayedHello(name, Delays.Long);
}
