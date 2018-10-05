class Page {

    constructor (url) {
        this.url = `app/views/${url}`;
    }

    load () {
        return fetch(this.url)
            .then(response => response.text())
            .then(data => this.html = data)
            .catch(err => this.html = 'SOMETHING WENT WRONG!');
    }

    render (element) {
        element.innerHTML = this.html;
    }
}

export default Page;