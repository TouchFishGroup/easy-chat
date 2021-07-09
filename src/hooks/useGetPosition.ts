const useGetPosition = () => {
  const easyChat =<HTMLElement> document.querySelector('#easy-chat')
  const avater = <HTMLElement> document.querySelector('#avater')
  let x1 = easyChat.offsetLeft+avater.offsetLeft+20
  let y1 =easyChat.offsetTop+avater.offsetTop+20
  return {x1,y1}
}

export default useGetPosition
