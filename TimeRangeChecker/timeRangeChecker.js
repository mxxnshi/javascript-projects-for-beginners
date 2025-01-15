function isInRange(time, start, end) {
    /**
     * 指定した時間の範囲内に含まれるかどうかを調べる。
     * @param {number} time
     * @param {number} start_time - 開始時刻 
     * @param {number} end_time - 終了時刻 
     * @returns {boolean} - 範囲内であれば true、それ以外は false。
     */
    if (start === end) return time === start; // 開始時刻と終了時刻が同じ場合、範囲に含む
    return start < end
        ? time >= start && time < end         // 通常範囲 (開始 < 終了)
        : time >= start || time < end;        // 日付をまたぐ範囲 (開始 > 終了)
}

function isPositiveNumber(value) {
    /**
     * 数値かどうかを確認する。
     * @param {*} value 
     * @returns {boolean} -  数値の場合はTrue,その以外はFalse
     */
    return typeof value === 'number' && !isNaN(value) && value > 0;
}

let input_time = 3.5
let start_time = 7
let end_time = 10

if (isPositiveNumber(input_time) && isPositiveNumber(start_time) && isPositiveNumber(end_time)) { //　正の数かを確認する
    let result = isInRange(parseInt(input_time), parseInt(start_time), parseInt(end_time)) //　数値へ変換する 
    if (result) {
        console.log(`${input_time}は指定した時間(${start_time} - ${end_time})の範囲内に含まれる.`)
    } else {
        console.log(`${input_time}は指定した時間(${start_time} - ${end_time})の範囲内に含まれません.`)
    }
}
else {
    console.log("正の数を入力してください。")
}


