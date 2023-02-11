

document.querySelector("html").addEventListener("click", function () {
    alert("Ouch! Stop poking me! I love you");
  });
  
  let myButton = document.querySelector("button");
  // adding image in js
  const myImage = document.querySelector("img");
  myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};

    ///Creating and placing new nodes
    const link = document.querySelector('a');
    link.textContent = 'Mozilla Developer Network';
    link.href = 'https://developer.mozilla.org';
    
    const sect = document.querySelector('section');
    const para = document.createElement('p');
    para.textContent = 'We hope you enjoyed the ride.';
    sect.appendChild(para);
    
    /// let's add a text node to the paragraph the link sits inside
    const text = document.createTextNode(' — the premier source for web development knowledge.');
    
    //grab a reference to the paragraph
    const linkPara = document.querySelector('p');
    linkPara.appendChild(text);
    
    //adding and removing
    sect.appendChild(linkPara);
    //linkPara.remove();
    //linkPara.parentNode.removeChild(linkPara);
    
    
    ///Manipulating styles
    //para.style.color = 'white';
    //para.style.backgroundColor = 'black';
    //para.style.padding = '10px';
    //para.style.width = '250px';
   // para.style.textAlign = 'center';
    
    //para.setAttribute('class', 'highlight');
    
    ///A dynamic shopping list
    link.textContent = 'Mozilla Developer Network';