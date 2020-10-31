import { Component, OnInit } from '@angular/core';
import * as converter from 'xml-js';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {
  
  parser = require('xml-js');
  jsonS = '{"u": "l", "k": true}';
  xmlS = this.parser.json2xml(this.jsonS);
  constructor() { }

  ngOnInit(): void {
  }

}
