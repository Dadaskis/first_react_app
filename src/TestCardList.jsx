import person0 from './assets/person0.jpg'
import person1 from './assets/person1.jpg'
import person2 from './assets/person2.jpg'
import Card from './card/Card'

function TestCardList() {
    return (
        <>
            <Card name="John Smith" desc="A young man in his mid-20s, John works as a software engineer and enjoys playing video games and hiking in his free time. He is friendly and easy-going, with a strong work ethic." img={person0}/>
            <Card name="Sarah Johnson" desc="Sarah is a vibrant and adventurous woman with a carefree spirit. She's always up for new experiences and loves to travel and explore. She's very independent and self-sufficient, and isn't afraid to take risks or step out of her comfort zone. She's also fiercely loyal to her friends and family, and would do anything for those she cares about." img={person1}/>
            <Card name="Max Thompson" desc="Max is a curious and energetic 12-year-old boy with a vivid imagination and a love for adventure. He's always eager to learn new things and loves to spend time outdoors. He's also a natural problem-solver and is great at thinking on his feet. Despite his young age, Max has an old soul and is surprisingly wise beyond his years." img={person2}/>
            <Card/>
            <br/>
        </>
    )
}

export default TestCardList