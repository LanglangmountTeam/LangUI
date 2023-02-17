import {describe,test,expect} from 'vitest';
import {mount} from '@vue/test-utils';
import table from '../packages/ltable/ltable.vue';
describe('table组件',()=>{
test('table组件应该存在',()=>{
    expect(table).toBeTruthy()
})
test('测试',()=>{
    const wrapper=mount(table,{
        props:{
            size:"big"
        }
    })
    expect(wrapper.html()).toContain('lang-table-big')
})
})