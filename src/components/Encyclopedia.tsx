import * as Beings from '../game/beings';

function Encyclopedia() {
    return (
        <div>
        <h1>Encyclopedia</h1>
        <p>
            This is the encyclopedia page. Here you can find information about
            different things.
        </p>
        <Entry />
        </div>
    );
}

export default Encyclopedia;

function Entry(obj : Beings.Being) {
    return (
        <div>
        <h1>{obj.plural}</h1>
        <p>
            This is an encyclopedia entry.
        </p>
        </div>
    );
}