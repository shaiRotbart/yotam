import { Component, OnInit } from '@angular/core';
import {TreeNode} from 'primeng/api';
import { TreeNodeY } from 'src/app/models/TreeNodeY';
import { NodeService } from 'src/app/nodeservice';


@Component({
  selector: 'app-tree-y',
  templateUrl: './tree-y.component.html',
  styleUrls: ['./tree-y.component.scss']
})
export class TreeYComponent implements OnInit {
 
 
  files1: TreeNode[]=[];
    
  files2: TreeNode[]=[];
  showInsert:boolean=false;
  withParameter:string='';
  withConditions:string='';
  leaftext:string='';
  constructor(public nodeService: NodeService) { }

  ngOnInit() {
      this.nodeService.getFiles().then(files => this.files1 = files);
      this.nodeService.getFiles().then(files => this.files2 = files);
  }
  
  expandAll(){
      this.files2.forEach( node => {
          this.expandRecursive(node, true);
      } );
  }

  collapseAll(){
      this.files2.forEach( node => {
          this.expandRecursive(node, false);
      } );
  }

  addfather()
  {
     let treeNode:TreeNodeY=new TreeNodeY();
    

     //TreeNode=new TreeNode();
    treeNode.label=this.leaftext;
    treeNode.leaf=true;
    if (this.withParameter=='yes')
    treeNode.icon="pi pi-check";
    if (this.withConditions=='yes')
    treeNode.icon="pi pi-check";
    treeNode.parent=this.files2[0];
    treeNode.draggable=true;
    treeNode.droppable=true;
    console.log(treeNode);
    
    this.files2.push(treeNode);
    this.showInsert=false;
    this.withConditions=this.withParameter=''
    this.leaftext='';
  }
  
  private expandRecursive(node:TreeNode, isExpand:boolean){
      node.expanded = isExpand;
      if (node.children){
          node.children.forEach( childNode => {
              this.expandRecursive(childNode, isExpand);
          } );
      }
  }
}

