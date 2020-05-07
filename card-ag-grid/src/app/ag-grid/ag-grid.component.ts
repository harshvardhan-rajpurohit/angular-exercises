import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImageFormatterComponent } from '../image-formatter/image-formatter.component';
import { DbserviceService } from '../dbservice.service';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.css']
})
export class AgGridComponent implements OnInit {
  private gridApi;
  private gridColumnApi;

  columnDefs = [
        {headerName: 'ID', field: 'id',width:50 },
        {headerName: 'Name', field: 'name' },
        {headerName: 'Email ID', field: 'email'},
        {headerName: 'Contact', field: 'phone'},
        {headerName: 'Address', field: 'address'},
        { headerName: 'Select', field: 'image', autoHeight: true,
         cellRendererFramework: ImageFormatterComponent }
    ];

  rowData:any = []

  constructor(private http:HttpClient,private _service:DbserviceService) { }

  ngOnInit(): void {
    // this.http.get("assets/data.json")
    // .subscribe(
    //   data => {
    //     this.rowData = data
    //     // console.log("ROW DATA: "+this.rowData)
    //   }
    // )

    this._service.getData(1)
    .subscribe(
      data => {
        this.rowData = data
      }
    )
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    params.api.expandAll();
  }

  onBtPrint() {
    var gridApi = this.gridApi;
    setPrinterFriendly(gridApi);
    setTimeout(function() {
      print();
      setNormal(gridApi);
    }, 2000);
  }

  forward(){
    let id= this.rowData[0].id+10;
    if(id<500){
    this._service.getData(this.rowData[0].id+10)
    .subscribe(
      data => {
        this.rowData = data
        // console.log(this.jsonData)
      }
    )
    }
    else {
      window.alert("Limit Reached! No more data to fetch!")
    }
  }

  backward(){
    let id = this.rowData[0].id-10;
    if(id>=1){
    this._service.getData(this.rowData[0].id-10)
    .subscribe(
      data => {
        this.rowData = data
        // console.log(this.jsonData)
      }
    )
    }
    else{
      window.alert("Limit Reached! The data starts from here!")
    }
  }
  

}

function setPrinterFriendly(api) {
  var eGridDiv = document.querySelector('#myGrid');
  // eGridDiv.style.height = '';
  api.setDomLayout('print');
}


function setNormal(api) {
  var eGridDiv = document.querySelector('#myGrid');
  // eGridDiv.style.width = '600px';
  // eGridDiv.style.height = '200px';
  api.setDomLayout(null);
}