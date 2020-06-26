import React, { Component } from 'react';

import Chart from 'chart.js';

class SkillsChart extends Component {
    
    componentDidMount(){
        
        // Theme colors: "#ec1839", "#2196f3", "#fa5b0f", "#ffb400", "#72b626"
        // backgroundColor: ['#ec1839', '#2196f3', '#fa5b0f', '#ffb400', '#72b626'],
        let pinkScheme = ['#F56C82', '#EC1839', '#980018', '#88E565', '#4AD516'];
        let blueScheme = ['#77BEF5', '#2198F3', '#0367B4', '#FFC372', '#FF9A13'];
        let orangeScheme = ['#FF9B6B', '#FA5B0F', '#9D3300', '#51C19A', '#0AA870'];
        let yellowScheme = ['#FFD164', '#FFB400', '#9B6E00', '#5B6DC3', '#1531AE'];
        let greenScheme = ['#B3E77A', '#71B626', '#396D00', '#DF769D', '#AF2558'];
        let selectedSchemeColor = '';
        
        let finalScheme = localStorage.getItem("selectedBodySkinColor");

        this.getSelectedSchemeColor = (color) =>{
            if (color=='pink'){
                selectedSchemeColor = pinkScheme;
            } else if (color=='blue'){
                selectedSchemeColor = blueScheme;
            } else if (color=='orange'){
                selectedSchemeColor = orangeScheme;
            } else if (color=='yellow'){
                selectedSchemeColor = yellowScheme;
            } else if (color=='green'){
                selectedSchemeColor = greenScheme;
            };
            console.log('selected scheme is', selectedSchemeColor);
            return selectedSchemeColor;
        }
        
        selectedSchemeColor = finalScheme ? this.getSelectedSchemeColor(finalScheme) : this.getSelectedSchemeColor('blue');

        let options = {
            legend: {
                position: 'bottom',
                labels: {
                    fontColor: '#666'
                }
            },
            scale: {
                display: false
            }
        };
        
        if(Boolean(document.querySelector('body').classList[0])){
            options.legend.labels.fontColor = '#FFF'
        };
        // JS Chart
        let ctxJS = document.getElementById('chartJS').getContext('2d');

        let dataJS = {
            labels: ["ReactJS", "NodeJS", "React Native", "GatsbyJS", "NextJS"],
            datasets: [{
                backgroundColor: selectedSchemeColor,
                borderColor: '#fff',
                data: [90, 80, 50, 60, 40],
            }]
        };
        
        let chartJS = new Chart(ctxJS, {
                data: dataJS,
                type: 'polarArea',
                options: options
        });
        
        // Python Chart
        let ctxPython = document.getElementById('chartPython').getContext('2d');

        let dataPython = {
            labels: ["Scripting", "Web Scraping", "Automated Testing", "Django"],
            datasets: [{
                backgroundColor: selectedSchemeColor.slice(0,4),
                borderColor: '#fff',
                data: [90, 80, 50, 60],
            }],
            display: false
        };
        
        let chartPython = new Chart(ctxPython, {
                data: dataPython,
                type: 'polarArea',
                options: options
        });

        // Programming languages Chart
        let ctxProgramming = document.getElementById('chartProgramming').getContext('2d');

        let dataProgramming = {
            labels: ["Python", "JavaScript", "HTML", "CSS", "SQL"],
            datasets: [{
                backgroundColor: selectedSchemeColor,
                borderColor: '#fff',
                data: [90, 80, 80, 60, 70],
            }],
            display: false
        };
        
        let chartProgramming = new Chart(ctxProgramming, {
                data: dataProgramming,
                type: 'polarArea',
                options: options
        });

        // Marketing skills chart
        let ctxMarketing = document.getElementById('chartMarketing').getContext('2d');

        let dataMarketing = {
            labels: ["SEO", "SEM", "Link Building", "Social Media", 'CRO'],
            datasets: [{
                backgroundColor: selectedSchemeColor,
                borderColor: '#fff',
                data: [90, 90, 80, 50,60],
            }],
            display: false
        };
        
        let chartMarketing = new Chart(ctxMarketing, {
                data: dataMarketing,
                type: 'polarArea',
                options: options
        });
        console.log(selectedSchemeColor);
        let body = document.addEventListener('change', ()=> {
            if(Boolean(document.querySelector('body').classList[0])){
                chartProgramming.options.legend.labels.fontColor = '#FFF';
                chartPython.options.legend.labels.fontColor = '#FFF';
                chartJS.options.legend.labels.fontColor = '#FFF';
                chartMarketing.options.legend.labels.fontColor = '#FFF';
            } else {
                chartProgramming.options.legend.labels.fontColor = '#666';
                chartPython.options.legend.labels.fontColor = '#666';
                chartJS.options.legend.labels.fontColor = '#666';
                chartMarketing.options.legend.labels.fontColor = '#666';
            }
            chartProgramming.update();
            chartPython.update();
            chartJS.update();
            chartMarketing.update();
        });
        let styleSwitcher = document.querySelector('.style-switcher');
        styleSwitcher.addEventListener('click',(e) => {
            selectedSchemeColor = this.getSelectedSchemeColor(e.target.title);
            chartProgramming.data.datasets[0].backgroundColor = selectedSchemeColor;
            chartPython.data.datasets[0].backgroundColor = selectedSchemeColor;
            chartJS.data.datasets[0].backgroundColor = selectedSchemeColor;
            chartMarketing.data.datasets[0].backgroundColor = selectedSchemeColor;
            chartProgramming.update();
            chartPython.update();
            chartJS.update();
            chartMarketing.update();
        });
        
    }
    render(){
        this.changeFilter = (e) =>{
            let filterBtns = document.querySelectorAll('button');
            for(let i=0;i<filterBtns.length;i++){
                if(filterBtns[i].value === e.target.value){
                    filterBtns[i].classList.add('active');
                    
                } else {
                    filterBtns[i].classList.remove('active')
                }
            };
            let charts = document.getElementsByTagName('canvas');
            for(let i=0;i<charts.length;i++){
                if(charts[i].title === e.target.value){
                    charts[i].classList.remove('hidden');
                } else {
                    charts[i].classList.add('hidden')
                }
            };
        }
        return (
            <div className="skill-chart">
                <div className="skill-filter padd-15">
                    <button onClick={this.changeFilter} className="active" type="button" value="programming">Languages</button>
                    <button onClick={this.changeFilter} type="button" value="python">Python</button>
                    <button onClick={this.changeFilter} type="button" value="javascript">Javascript</button>
                    <button onClick={this.changeFilter} type="button" value="marketing">Marketing</button>
                </div>
                <canvas id="chartProgramming" title="programming" className='' width="25w" height="25h"></canvas>
                <canvas id="chartJS" title="javascript" className='hidden' width="25w" height="25h"></canvas>
                <canvas id="chartPython" title="python" className='hidden' width="25w" height="25h"></canvas>
                <canvas id="chartMarketing" title="marketing" className='hidden' width="25w" height="25h"></canvas>
            </div>
    )}

}



export default SkillsChart;