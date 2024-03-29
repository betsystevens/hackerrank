#!/bin/python3

import math
import os
import random
import re
import sys

class SinglyLinkedListNode:
    def __init__(self, node_data):
        self.data = node_data
        self.next = None

class SinglyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    def insert_node(self, node_data):
        node = SinglyLinkedListNode(node_data)

        if not self.head:
            self.head = node
        else:
            self.tail.next = node


        self.tail = node

# Complete the printLinkedList function below.

#
# For your reference:
#
# SinglyLinkedListNode:
#     int data
#     SinglyLinkedListNode next
#
#
def printLinkedList(node):
  while node:
    print(node.data)
    node = node.next

# if __name__ == '__main__':
    # llist_count = int(input())
    # llist = SinglyLinkedList()
    # for _ in range(llist_count):
        # llist_item = int(input())
        # llist.insert_node(llist_item)
  
myList = [1,3,6,7,9]
n = len(myList)
llist = SinglyLinkedList() 
for i in range(n):
  llist_item = myList[i]
  llist.insert_node(llist_item)

printLinkedList(llist.head)