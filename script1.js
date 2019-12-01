class UI {
    constructor() {
        this.table = null
    }

    getTable () {
        this.table = this.createTable()
    }
    mountTable(){
        const rootElement = document.querySelector('#root')
        rootElement.append(this.table)
    }

}

class Bootstrap extends UI {
    createTable() {
        const tableElement = document.createElement('div')
        tableElement.innerHTML=`<table class="table table-primary">

        <thead>
            <tr>
              <th>Column 1</th>
              <th>Column 2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cell 1-1</td>
              <td>Cell 1-2</td>
            </tr>
            <tr>
              <td>Cell 2-1</td>
              <td>Cell 2-2</td>
            </tr>
          </tbody>
    </table>`
        return tableElement
    }
}

class Material extends UI {
     createTable() {

        const tableElement = document.createElement('div')
        tableElement.innerHTML=`<table class="mui-table mui-table--bordered">

        <thead>
            <tr>
              <th>Column 1</th>
              <th>Column 2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cell 1-1</td>
              <td>Cell 1-2</td>
            </tr>
            <tr>
              <td>Cell 2-1</td>
              <td>Cell 2-2</td>
            </tr>
          </tbody>
    </table>`

    return tableElement
    }
}

const boottable = new Bootstrap
boottable.getTable()
mattable.getTable()
mattable.mountTable()