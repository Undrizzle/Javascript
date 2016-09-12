/**
 * 栈
 * top(属性) -- 栈顶位置
 * push(方法) -- 向栈中压入一个新元素
 * pop(方法) -- 从栈中抛出一个元素
 * peek(方法) -- 返回栈顶元素
 * length(方法) -- 返回栈内元素个数
 * clear(方法) -- 清空栈
 */
 
// 定义stack类
function Stack() {
	this.dataStore = [];
	this.top = 0;
	this.push = push;
	this.pop = pop;
	this.peek = peek;
	this.clear = clear;
	this.length = length;
}

// 向栈中压入一个新元素
function push(element) {
	this.dataStore[this.top++] = element;
}

// 从栈中抛出一个元素
function pop() {
	return this.dataStore[--this.top];
}

// 返回栈顶元素
function peek() {
	return this.dataStore[this.top - 1];
}

// 返回栈内元素个数
function length() {
	return this.top;
}

// 清空栈
function clear() {
	this.top = 0;
}