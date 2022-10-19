function solution(phone_number) {
    return Array(phone_number.length - 4).fill('*').join('') + phone_number.substring(phone_number.length - 4);
}