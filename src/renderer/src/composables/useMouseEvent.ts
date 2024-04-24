export default () => {
  const bm = () => {
    // 鼠标放在app上关闭穿透
    const el = document.querySelector('#app')! as HTMLDivElement
    el.addEventListener('mouseenter', () => {
      console.log('app')
    })

    // 鼠标放在body上开启穿透
    document.body.addEventListener('mousemove', (event: MouseEvent) => {
      if (event.target == document.body) {
        console.log('body')
      }
    })
  }
  return { bm }
}
