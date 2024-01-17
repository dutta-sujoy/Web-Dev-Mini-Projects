document.addEventListener("DOMContentLoaded", function() {

    var contentTitle = document.querySelector(".content-section h1");
    var contentText = document.querySelector(".content-section p");
    var contentImage = document.querySelector(".main-img img");

    var box1 = document.querySelector(".box1");
    var box2 = document.querySelector(".box2");
    var box3 = document.querySelector(".box3");
    var box4 = document.querySelector(".box4");

    box1.addEventListener("click", function() {
        updateContent("Apollo 11", "Apollo 11, the historic mission that captivated the world, marked a monumental achievement in human space exploration. Launched by NASA on July 16, 1969, this mission became the first successful attempt to land humans on the Moon. The spacecraft carried a crew of three astronauts: Commander Neil Armstrong, Lunar Module Pilot Edwin \"Buzz\" Aldrin, and Command Module Pilot Michael Collins. On July 20, 1969, millions of people around the globe gathered around television sets to witness the awe-inspiring moment when Neil Armstrong descended from the lunar module, Eagle, and took those famous first steps onto the lunar surface, uttering the immortal words, \"That's one small step for [a] man, one giant leap for mankind.\" Buzz Aldrin joined him shortly afterward, and together, they conducted experiments, collected samples, and planted the American flag on the lunar soil. Michael Collins orbited the Moon in the command module, ensuring their safe return to Earth. The success of Apollo 11 not only fulfilled President John F. Kennedy's vision of landing humans on the Moon before the end of the 1960s but also symbolized the pinnacle of human ingenuity and determination in the pursuit of exploration beyond our home planet.", "img/apollo rocket.png");
    });

    box2.addEventListener("click", function() {
        updateContent("Chandrayaan 3", "Chandrayaan 3, the upcoming Indian lunar exploration mission, is expected to continue the legacy of Chandrayaan missions. Planned by the Indian Space Research Organisation (ISRO), Chandrayaan 3 aims to explore the Moon's surface and conduct scientific experiments. The mission is anticipated to carry advanced instruments and technology to enhance our understanding of the lunar environment. Chandrayaan 3 represents India's commitment to space exploration and scientific discovery. Scheduled for launch in the near future, Chandrayaan 3 will carry state-of-the-art instruments, including high-resolution cameras, spectrometers, and other scientific payloads. These instruments will enable detailed mapping and analysis of the lunar surface, helping scientists gain valuable insights into the Moon's geological and mineral composition. Chandrayaan 3 reflects India's dedication to advancing space science and technology, fostering international collaboration, and inspiring the next generation of scientists and engineers. As the mission unfolds, it is poised to make significant contributions to our understanding of the Moon and the broader field of planetary exploration.", "img/ch 3.png");
    });

    box3.addEventListener("click", function() {
        updateContent("Falcon 9", "Falcon 9, developed and manufactured by SpaceX, is a reliable two-stage orbital launch vehicle designed for the cost-effective transport of satellites and the Dragon spacecraft into orbit. With its reusability features, Falcon 9 has revolutionized space transportation, making access to space more affordable. The rocket is equipped with advanced technologies to ensure precision and reliability in delivering payloads to various orbits. Falcon 9 plays a crucial role in SpaceX's commitment to advancing space exploration and making it accessible for future missions. Utilizing reusable first-stage boosters, Falcon 9 has set new standards for efficiency in the aerospace industry. Its versatility allows it to carry a variety of payloads, from commercial satellites to cargo for the International Space Station. The rocket's success has contributed to the emergence of a new era in spaceflight, where the cost of reaching space is significantly reduced. Falcon 9 exemplifies SpaceX's dedication to innovation and sustainability in space travel, paving the way for ambitious endeavors such as manned missions to Mars.", "img/falcon 9.png");
    });
    
    
    box4.addEventListener("click", function() {
        updateContent("Atlas 5", "Atlas 5, a workhorse of the United Launch Alliance (ULA), is an expendable launch vehicle renowned for its versatility and reliability. Used for a wide range of missions, including satellite launches and interplanetary missions, Atlas 5 has a successful track record in delivering payloads to various orbits. With a powerful performance and adaptable payload capacity, Atlas 5 continues to be a key player in advancing space exploration and ensuring reliable access to space for a variety of missions. Featuring a modular design, Atlas 5 can be customized to meet specific mission requirements, making it a preferred choice for both commercial and government payloads. The rocket's proven track record of success underscores its reputation as a reliable and robust launch vehicle. Atlas 5's capability to carry payloads into a range of orbits, including geostationary and low Earth orbit, makes it a versatile and valuable asset for the space launch industry. As a cornerstone of ULA's launch vehicle fleet, Atlas 5 contributes to the continued progress of space exploration and satellite deployment.", "img/Atlas 5.png");
    });


    function updateContent(title, text, imageUrl) {
        contentTitle.textContent = title;
        contentText.textContent = text;
        contentImage.src = imageUrl;
    }
});