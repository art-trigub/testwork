import Image from "next/image";
import image1_1 from '../../public/image/image1-1.png'
import image1_2 from '../../public/image/image1-2.png'
import image2 from '../../public/image/image2.png'
import image3 from '../../public/image/image3.png'
import image4 from '../../public/image/image4.png'
import image5 from '../../public/image/image5.png'
import image6 from '../../public/image/image6.png'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div>
      <h1 className="text-blue main_header">We make  creative media that <span className="text-darkblue">adds value</span></h1>
    </div>
    <div className="content__wrap">
    <div className="content__container flex flex-row flex-wrap justify-between">
      <div className="mt-10 bg-white content_item__wrap">
        <div className="content_item_image__container">
          <div className="content_item_image__wrap">
          </div>
          <Image 
            src={image1_1}
            alt='preview'
            width={182}
            placeholder="blur"
          /> 
          <div className="mt-6">
          <Image 
            src={image1_2}
            alt='preview'
            width={182}
            placeholder="blur"
          /> 
          </div>
          
        </div>
        <div className="text-darkgray content_item_description__container">
          <div className="font-extrabold content_item_description__title">Photography</div>
          <div className="font-bold mt-3 content_item_description__list">
            <ul className="list-disc">
              <li>Drone Photography</li>
              <li>Interiors</li>
              <li>Exteriors / Architectural</li>
            </ul>
          </div>
          <div className="font-semibold mt-3 content_item_description__text">Every photograph we produce finds the beauty in your property while serving as a profitable asset.</div>
        </div>
      </div>
      <div className="mt-10 bg-white content_item__wrap">
        <div className="content_item_image__container">
          <Image 
            src={image2}
            alt='preview'
            height={333}
            placeholder="blur"
          /> 
        </div>
        <div className="text-darkgray content_item_description__container">
          <div className="font-extrabold content_item_description__title">Virtual Staging</div>
          <div className="font-semibold mt-3 content_item_description__text">
            <p>Our staging will help you sell the potential of your space.</p>
            <p className="mt-2">We can work off of our own photography or photos you provide.</p>
          </div>
        </div>
      </div>
      <div className="mt-10 bg-white content_item__wrap">
        <div className="content_item_image__container">
          <Image 
            src={image3}
            alt='preview'
            height={333}
            placeholder="blur"
          /> 
        </div>
        <div className="text-darkgray content_item_description__container">
          <div className="font-extrabold content_item_description__title">Renderings</div>
          <div className="font-bold mt-3 content_item_description__list">
            <ul className="list-disc">
              <li>Interiors</li>
              <li>Exteriors</li>
            </ul>
          </div>
          <div className="font-semibold mt-3 content_item_description__text">Renderings are the gold standard in pre-construction marketing.</div>
        </div>
      </div>
      <div className="mt-10 bg-white content_item__wrap">
        <div className="content_item_image__container">
          <Image 
            src={image4}
            alt='preview'
            height={333}
            placeholder="blur"
          /> 
        </div>
        <div className="text-darkgray content_item_description__container">
          <div className="font-extrabold content_item_description__title">Interactive Tours</div>
          <div className="font-bold mt-3 content_item_description__list">
            <ul className="list-disc">
              <li>Matterport</li>
              <li>Video Walkthroughs</li>
            </ul>
          </div>
          <div className="font-semibold mt-3 content_item_description__text">Give your audience the ability to explore your property without requiring in-person travel.</div>
        </div>
      </div>
      <div className="mt-10 bg-white content_item__wrap">
        <div className="content_item_image__container">
          <Image 
            src={image5}
            alt='preview'
            height={333}
            placeholder="blur"
          /> 
        </div>
        <div className="text-darkgray content_item_description__container">
          <div className="font-extrabold content_item_description__title">Floor Plans</div>
          <div className="font-bold mt-3 content_item_description__list">
            <ul className="list-disc">
              <li>On-site Measure</li>
              <li>2D Floor Plans</li>
              <li>3D Floor Plans</li>
            </ul>
          </div>
          <div className="font-semibold mt-3 content_item_description__text">We produce laser-precise floor plans faster than any other service.</div>
        </div>
      </div>
      <div className="mt-10 bg-white content_item__wrap">
        <div className="content_item_image__container">
          <Image 
            src={image6}
            alt='preview'
            height={333}
            placeholder="blur"
          /> 
        </div>
        <div className="text-darkgray content_item_description__container">
          <div className="font-extrabold content_item_description__title">Video</div>
          <div className="font-bold mt-3 content_item_description__list">
            <ul className="list-disc">
              <li>Drone Cinematography</li>
              <li>Interiors</li>
              <li>Exteriors / Architectural</li>
            </ul>
          </div>
          <div className="font-semibold mt-3 content_item_description__text">Video content has higher engagement and will help your property stand out online.</div>
        </div>
      </div>
    </div>
    <div className="main_button_wrap">
       <button className="main_button bg-blue hover:bg-blue-700 text-white font-bold py-2 px-4">
          Get STARTED
      </button>
    </div>
   
    </div>
    </main>
    
  );
}
