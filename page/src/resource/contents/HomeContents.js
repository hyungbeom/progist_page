export const getHomeContents = () => {

    // page1

    const homeTitle1='Welcome to\n' + 'CargoKite, where\n' + 'engineering\n' + 'excellence meets\n' + 'innovation'

    const infoCardContents1 = {
        img:'././img/homeImg1.png',
        title: 'We are a tech startup from Munich\n' + 'reinventing how goods are transported\n' + 'across the ocean',
        subtitle: 'Since our inception in 2020, we have been dedicated to pioneering groundbreaking technology solutions for the future of transport and logistics. Spun out of the Technical University of Munich as one of the world-leading institutions for robotics and automation, our team combines German engineering tradition with the fast development cycles of a startup',
        link: <div>More about Us</div>
    }
    const infoCardContents1_1 = {
        img:'././img/homeImg1_1.png'
    }

    // page2

    const homeTitle2='Ocean shipping is\n' + 'the cheapest way\n' + 'to transport\n' + 'goods, but...'

    const infoCardContents2 = {
        img: '././img/homeImg2.png',
        title: '…not reliable due to a lack\n' + 'of resilience',
        subtitle: 'One single incident such as a ship getting stuck in the Suez Canal or a labor strike in a port shuts down major parts of global shipping, leads to massive congestion and ultimately causes damages in the billions in just a few days.',
    }
    const infoCardContents3={
        img: '././img/homeImg3.png',
        title: '…not sustainable',
        subtitle:'Ships run on heavy fuel oil, the dirtiest fuel in the world, making global shipping responsible for nearly 1 Gigatonne of CO2 emissions per year. That\'s more than all of Germany combined.',
    }

    // page3

    const infoCardContents4={
        img: '././img/homeImg1.png',
        title: '…only for standard routes',
        subtitle:'Ultra-Large Vessels with more than 15.000 containers are very cost - efficient, but only 5% of ports have sufficient infrastructure for such vessels. On every other route, small, less cost efficient ships are in use, leading up to twice as high transport costs.',
    }
    const infoCardContents5={
        img:'././img/homeImg5.png',
        title:'…not\n' + 'customer-oriented',
        subtitle:'Having to serve thousands of customers with a single ship makes individualized routing and just-in-time delivery impossible for shipping companies, forcing cargo owners to keep expensive inventory.',
    }
    const infoCardContents6={
        img: '././img/homeImg3.png',
        title: '…only for standard routes',
        subtitle:'Ultra-Large Vessels with more than 15.000 containers are very cost - efficient, but only 5% of ports have sufficient infrastructure for such vessels. On every other route, small, less cost efficient ships are in use, leading up to twice as high transport costs.',
    }

    // page4

    const homeTitle3= 'We offer customized and innovative'
    const homeTitle3_1='platform solutions!'

    // page5

    const homeSubTitle='We are developing the sailing ship of the 21st century.\n'+ 'Our innovative ship concept utilizes wind energy as\n'+ 'its mean efficiency that has never been seen before.'

    // page6

    const infoCardContents7={
        title: '…only for standard routes',
        subtitle:'Ultra-Large Vessels with more than 15.000 containers are very cost - efficient, but only 5% of ports have sufficient infrastructure for such vessels. On every other route, small, less cost efficient ships are in use, leading up to twice as high transport costs.',
    }
    const infoCardContents8={
        title: '…only for standard routes',
        subtitle:'Ultra-Large Vessels with more than 15.000 containers are very cost - efficient, but only 5% of ports have sufficient infrastructure for such vessels. On every other route, small, less cost efficient ships are in use, leading up to twice as high transport costs.',
    }
    const infoCardContents9={
        title: '…only for standard routes',
        subtitle:'Ultra-Large Vessels with more than 15.000 containers are very cost - efficient, but only 5% of ports have sufficient infrastructure for such vessels. On every other route, small, less cost efficient ships are in use, leading up to twice as high transport costs.',
    }
    const infoCardContents10={
        title: '…only for standard routes',
        subtitle:'Ultra-Large Vessels with more than 15.000 containers are very cost - efficient, but only 5% of ports have sufficient infrastructure for such vessels. On every other route, small, less cost efficient ships are in use, leading up to twice as high transport costs.',
    }

    // FAQ
    const faq=[
        'Do you build the entire ship in-house?',
        'What if there is no wind?',
        'Are your ships already in operation?',
        'Why don\'t you retrofit Airborne Wind Energy Systems/ kites to ships?',
        'Where can these ships operate?',
        'What type of freight can I transport with your ship?',
        'I am a cargo owner/ shipper: I regularly have containers transported via sea. How do I benefit from using CargoKite ships?',
        'I\'m a shipping company. Why would I replace my existing vessels with CargoKite vessels?',
    ]

    return {
        homeTitle1,
        homeTitle2,
        homeTitle3,
        homeTitle3_1,
        homeSubTitle,
        faq,
        infoCardContents1,
        infoCardContents1_1,
        infoCardContents2,
        infoCardContents3,
        infoCardContents4,
        infoCardContents5,
        infoCardContents6,
        infoCardContents7,
        infoCardContents8,
        infoCardContents9,
        infoCardContents10,
    }
};