/**
 * 列表
 * listSize(属性) -- 列表的元素个数
 * pos(属性) -- 列表的当前位置
 * length(属性) -- 返回列表中元素的个数
 * clear(方法) -- 清空列表中的所有元素
 * toString(方法) -- 返回列表的字符串形式
 * getElement方法) -- 返回当前位置的元素
 * insert(方法) -- 在现有元素后插入新元素
 * append(方法) -- 在列表的末尾添加新元素
 * remove(方法) -- 从列表中删除元素
 * front(方法) -- 将列表的当前位置移动到第一个元素
 * end(方法) -- 将列表的当前位置移动到最后一个元素
 * prev(方法) -- 将当前位置前移一位
 * next(方法) -- 将当前位置后移一位
 * currPos(方法) -- 返回列表的当前位置
 * moveTo(方法) -- 将当前位置移动到指定位置
 */  
 
// 实现一个List类
function List() {
	this.listSize = 0;
	this.pos = 0;
	this.dataStore = []; //初始化一个空数组来保存列表元素
	this.clear = clear;
	this.find = find;
	this.toString = toString;
	this.insert = insert;
	this.append = append;
	this.remove = remove;
	this.front = front;
	this.end = end;
	this.prev = prev;
	this.next = next;
	this.length = length;
	this.currPos = currPos;
	this.moveTo = moveTo;
	this.getElement = getElement;
	this.length = length;
	this.contains = contains
}

// 在列表的末尾添加新元素
function append(element) {
	this.dataStore[this.listSize++] = element;
}

// 在列表中查找某一元素
function find(element) {
	for (var i = 0; i < this.dataStore.length; i++) {
		if (this.dataStore[i] == element) {
			return i;
		}
	}
	return -1;
}

// 从列表中删除元素
function remove(element) {
	var foundAt = this.find(element);
	if (foundAt > -1) {
		this.dataStore.splice(foundAt, 1);
		return true;
	}
	return false;
}

// 返回列表中元素的个数
function length() {
	return this.listSize;
}

// 返回列表的字符串形式
function toString() {
	return this.dataStore;
}

// 在现有元素后插入新元素
function insert(element, after) {
	var insertPos = this.find(after);
	if (insertPos > -1) {
		this.dataStore.splice(insertPos + 1, 0, element);
		++this.listSize;
		return true;
	}
	return false;
}

// 清空列表中所有的元素
function clear() {
	delete this.dataStore;
	this.dataStore = [];
	this.listSize = this.pos = 0;
}

// 将列表的当前位置移动到第一个元素
function front() {
	this.pos = 0;
}

// 将列表的当前位置移动到最后一个元素
function end() {
	this.pos = this.listSize - 1;
}

// 将当前位置前移一位
function prev() {
	if (this.pos > 0) {
		--this.pos;
	}
}

// 将当前位置后移一位
function next() {
	if (this.pos < this.listSize - 1) {
		++this.pos;
	}
}

// 返回列表的当前位置
function currPos() {
	return this.pos;
}

// 将当前位置移动到指定位置
function moveTo(position) {
	if (position < 0 || position > this.listSize - 1) 
		return false;
	else
		this.pos = position;
}

// 返回当前位置的元素
function getElement() {
	return this.dataStore[this.pos];
}




