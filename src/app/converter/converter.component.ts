import { Component, OnInit } from '@angular/core';
import { json2xml } from 'xml-js';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {
  jsonS = '{"uqwe": "l", "kqwe": true}';
  xmlS = json2xml(this.jsonS, {compact: true});
  constructor() {
  }

  ngOnInit(): void {
  }

}
