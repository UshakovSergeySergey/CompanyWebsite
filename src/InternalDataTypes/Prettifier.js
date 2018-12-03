class Prettifier {
    static prettifyPhoneNumber = (rawPhoneNumber) => {
        let prettyPhoneNumber =
            rawPhoneNumber.substring(0, 2)
            + ' ('
            + rawPhoneNumber.substring(2, 5)
            + ') '
            + rawPhoneNumber.substring(5, 8)
            + '-'
            + rawPhoneNumber.substring(8, 10)
            + '-'
            + rawPhoneNumber.substring(10, 12);
        return prettyPhoneNumber;
    };
}

export { Prettifier }
