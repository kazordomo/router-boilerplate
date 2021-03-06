class Page {

    constructor (url, script = null) {
        this.url = `app/views/${url}`;
        this.script = script;
    }

    load () {
        return fetch(this.url)
            .then(response => response.text())
            .then(data => this.html = data)
            .catch(err => this.html = 'Something went wrong!');
    }

    loadScript (script) {
        switch(script) {
            default:
                return false;
        }
    }

    render (element) {
        element.innerHTML = this.html;
        // Be sure that we render the html before the script
        setTimeout(() => this.loadScript(this.script), 0);
    }
}

export default Page;