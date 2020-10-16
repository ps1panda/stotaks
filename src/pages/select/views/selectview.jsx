import React, { Component } from 'react'
import $ from "jquery";
export default class Selectview extends Component {
    componentDidMount() {
        $(function(){
            var hide = 0;
            $('.selectview_box > div').click(function(){
                $('.selectview_box > div').removeClass('sb_act')
                $(this).addClass('sb_act')
                if($(this).hasClass('s1')){
                    $('.select_list').show()
                    $('.maps').hide()
                }
                if($(this).hasClass('s2')){
                    $('.select_list').hide()
                    $('.maps').show()
                }
                
            })
            $('.show_filter').click(function(){
                $('.filters_wrap').show()
            })

        })
      }
    render() {
        return (
            <div className='filter_box_mobile'>
                <div className="show_filter"><span>Настроить фильтры</span></div>
                        <p className='clearfilter'>
                        Сбросить фильтры
                        </p>
                        <div className='selectview_box'>
                    <div className='s1 sb_act'><span>Списком</span></div>
                    <div className='s2'><span>На карте</span></div>
                </div>
            </div>
                
        )
    }
}
