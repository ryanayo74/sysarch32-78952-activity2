import person1 from './assets/person1.png'
import person2 from './assets/person2.jpg'
import person3 from './assets/person3.jpg'
import person4 from './assets/person4.jpg'
import person5 from './assets/person5.jpg'

function Card() {
    const persons = [
        { name: 'Monkey D Luffy', email: 'Monkey@Luffy.com', image: person1 },
        { name: 'Roronoa Zoro', email: 'Roronoa@Zoro.com', image: person2 },
        { name: 'Vinsmoke Sanji', email: 'Vinsmoke@Sanji.com', image: person3 },
        { name: 'The Knight Jinbei', email: 'Knight@Jenbei.com', image: person4 }
      ];

return(
<body>

<div className="card">
        {persons.map((person, index) => (
          <div className="person" key={index}>
            <div className="info">
              <img src={person.image} alt={"logo"} />
              <h2>{person.name}</h2>
              <p>{person.email}</p>
            </div>
          </div>
          ))}
     </div>

    <div className="card2">
    <div className="person">
          <div className="info">
            <img src={person5} alt={"logo"} />
            <h2>Son Goku</h2>
            <p>Son@Goku.com</p>
          </div>
        </div>
    </div>

    </body>

);
}
export default Card