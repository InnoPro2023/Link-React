import React from 'react';
import { About } from './About';

class Home extends React.Component{
    render(){
        return(
<div>
    <header>
		<h1>Sản phẩm mới</h1>
		<nav> 
			<ul> 
				
			</ul>
		</nav>
	</header>
	
	<main>
		<section class="products">
			<h2>Featured Products</h2>
			<ul> 
				<li>
					<img src="English Pics 2/Dong Ho pic2.jpg" alt="Product 1"/>
					<p><a>Đông Hồ (mới)</a></p>
					<p>$20</p>
					<button type="button" onClick={About()}>Add to Cart</button>
				</li>
				<li>
					<img src="English Pics 2/Dong Ho pic.jpg" alt="Product 2"/>
					<h3>Đông Hồ</h3>
					<p>$20</p>
					<button>Add to Cart</button>
				</li>
				<li>
					<img src="English Pics 2/Dong Ho pic3.jpg" alt="Product 3"/>
					<h3>Đông Hồ (mới)</h3>
					<p>$20</p>
					<button>Add to Cart</button>
				</li>
				<li>
					<img src="English Pics 2/LMS.jpg" alt="Product 3"/>
					<h3>Legendary Moonlight Sculptor</h3>
					<p>$20</p>
					<button>Add to Cart</button>
				</li>
				<li>
					<img src="English Pics 2/Tremosine sul Garda.jpg" alt="Product 3"/>
					<h3>Tremosine sul Garda</h3>
					<p>$20</p>
					<button>Add to Cart</button>
				</li>
				<li>
					<img src="English Pics 2/Weird pic.jpg" alt="Product 3"/>
					<h3>For you</h3>
					<p>$20</p>
					<button>Add to Cart</button>
				</li>
				<li>
					<img src="English Pics 2/Fantasy land pic1.jpg" alt="Product 3"/>
					<h3>To neverland</h3>
					<p>$20</p>
					<button>Add to Cart</button>
				</li>
				<li>
					<img src="English Pics 2/Fantasy land pic2.jpg" alt="Product 3"/>
					<h3>To fantasy</h3>
					<p>$20</p>
					<button>Add to Cart</button>
				</li>
			</ul>
		</section>
		
		<section>
			<h2>About Us</h2>
			<p>None </p>
		</section>
	</main>
	
	<footer>
		<h1>None</h1>
	</footer>
        </div>
        )
    }
}

export default Home;