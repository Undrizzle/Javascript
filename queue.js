/**
 * 队列
 * enqueue(方法) -- 向队尾添加一个元素
 * dequeue(方法) -- 删除队首元素
 * front(方法) -- 读取队首元素
 * back(方法) -- 读取队尾的元素
 * toString(方法) -- 显示队列内的所有元素
 * empty(方法) -- 判断队列是否为空
 */
 
// 定义一个Queue类
function Queue() {
	this.dataStore = [];
	this.enqueue = enqueue;
	this.dequeue = dequeue;
	this.front = front;
	this.back = back;
	this.toString = toString;
	this.empty = empty;
}

// 向队尾添加一个元素
function enqueue(element) {
	this.dataStore.push(element);
}

// 删除队首元素
function dequeue() {
	return this.dataStore.shift();
}

// 读取队首元素
function front() {
	return this.dataStore[0];
}

// 读取队尾的元素
function back() {
	return this.dataStore[this.dataStore.length - 1];
}

// 显示队列内的所有元素
function toString() {
	var retStr = "";
	for (var i = 0; i < this.dataStore.length; ++i) {
		retStr += this.dataStore[i] + "\n";
	}
	return retStr;
}

// 判断队列是否为空
function empty() {
	if (this.dataStore.length == 0) {
		return true;
	}
	else {
		return false;
	}
}
	