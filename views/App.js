/**
 * @file App.js
 *
 * @author yupeng(yupeng12@baidu.com)
 * @created: 2019/07/05
 */

const template = `
<template>
    <div id="app">
        <h3>todomvc</h3>
        <div class="todomvc">
            <input class="text-input"
                placeholder="Please enter something"
                on-keydown="onInputKeydown"
                value="{=inputValue=}"
                type="text" />
            <div class="list">
                <ul>
                    <li s-for="item in listData">
                        <span>{{item.value}}</span>
                        <i class="close-icon"
                            on-click="deleteItem(item)">x</i>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>`;

const MyApp = san.defineComponent({
    template,

    initData: function () {
        return {
            inputValue: '',
            listData: []
        };
    },
    onInputKeydown(e) {
        e.keyCode === 13 && this.pushListData();
    },
    pushListData() {
        let inputValue = this.data.get('inputValue');
        let d = new Date();
        this.data.push('listData', {value: inputValue, key: `${inputValue}+T:${d.getTime()}`});
        this.data.set('inputValue', '');
    },
    deleteItem(item) {
        this.data.remove('listData', item);
    }
});


const myApp = new MyApp();
myApp.attach(document.body);