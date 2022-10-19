function solution(nums) {
    let answer = 0;
    const count = nums.length / 2;
    const uniq = [...new Set(nums)];
    return count >= uniq.length ? uniq.length : count;
}