const apiRequest = async (url='', optionsObj=null, errMsg=null) => {
  try{
    const respone = await fetch(url, optionsObj)
    if (!respone.ok) throw Error('Reload Application please!!')
  }catch(err) {
    errMsg = err.message
  }finally {
    return errMsg
  }
}

export default apiRequest