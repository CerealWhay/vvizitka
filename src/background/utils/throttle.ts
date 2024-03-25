export const throttle = (callee: Function, timeout: number) => {
    let timer: null | ReturnType<typeof setTimeout> = null
    return function perform(...args: any[]) {
        if (timer) return
        timer = setTimeout(() => {
            callee(...args)
            if (timer) {
                clearTimeout(timer)
                timer = null
            }
        }, timeout)
    }
}
