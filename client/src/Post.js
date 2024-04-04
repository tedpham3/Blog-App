export default function Post(){
    return (
    <div className="post">
          <div className="image">
          <img src="https://realpython.com/cdn-cgi/image/width=960,format=auto/https://files.realpython.com/media/NumPy-Random-Number-Generator_Watermarked.f87659b8e3ee.jpg" alt="" />
          </div>
          <div className="texts">
          <h2>Using the NumPy Random Number Generator</h2>
          <p className="info" >
            <a className="author">Ted Pham</a>
            <time>2024-04-03 6:39</time>
          </p>
          <p className="summary">Random numbers are a very useful feature in many different types of programs, from mathematics and data analysis through to computer games and encryption applications. You may be surprised to learn that it’s actually quite difficult to get a computer to generate true randomness. However, if you’re careful, the NumPy random number generator can generate random enough numbers for everyday purposes</p>
          </div>
          </div>
    )
}