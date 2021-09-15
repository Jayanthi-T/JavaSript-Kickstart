Get next age I
Complete the function getNextAge such that it returns the age next year (by adding 1 to the current age).
Note that the age is provided by the user in a text box (which you can try in the browser tab).

/**
 * @param {string} age
 */
export function getNextAge(age) {
    let curage = Number.parseInt(age,10);
    return curage+1;
}
