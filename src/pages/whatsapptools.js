import React, { useEffect } from "react"

function Whatsapptools() {
  useEffect(() => {
    window.location.href =
      "https://chrome.google.com/webstore/detail/whatsapp-tools/akbdcpijgcaccjnjmcedafaojjgodcfe"
  }, [])

  return <div>Redirecting to Chrome Store...</div>
}

export default Whatsapptools
