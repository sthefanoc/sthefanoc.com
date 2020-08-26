import React, { Component } from 'react';
import Chart from 'chart.js';
import ReactTooltip from 'react-tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

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
        let ctxMobile = document.getElementById('chartMobile').getContext('2d');

        let dataMobile = {
            labels: ["React Native", "PWA"],
            datasets: [{
                backgroundColor: selectedSchemeColor,
                borderColor: '#fff',
                data: [0.4, 0.4],
            }]
        };
        
        let chartMobile = new Chart(ctxMobile, {
                data: dataMobile,
                type: 'polarArea',
                options: options
        });
        
        // Other Chart
        let ctxOther = document.getElementById('chartOther').getContext('2d');

        let dataOther = {
            labels: ["Git", "Web Scraping", "Automated Testing", "SQL", "MongoBD"],
            datasets: [{
                backgroundColor: selectedSchemeColor.slice(0,4),
                borderColor: '#fff',
                data: [2, 2, 1.5, 1, 0.6],
            }],
            display: false
        };
        
        let chartOther = new Chart(ctxOther, {
                data: dataOther,
                type: 'polarArea',
                options: options
        });

        // Frontend Chart
        let ctxFrontend = document.getElementById('chartFrontend').getContext('2d');

        let dataFrontend = {
            labels: ["React.Js", "Gatsby.Js",'Next.Js', "HTML", "CSS"],
            datasets: [{
                backgroundColor: selectedSchemeColor,
                borderColor: '#fff',
                data: [1.5, 1, 0.4,  2.5, 2.5],
            }],
            display: false
        };
        
        let chartFrontend = new Chart(ctxFrontend, {
                data: dataFrontend,
                type: 'polarArea',
                options: options
        });

        // Backend chart
        let ctxBackend = document.getElementById('chartBackend').getContext('2d');

        let dataBackend = {
            labels: ["Node.Js", "Express", "Django", "Flask"],
            datasets: [{
                backgroundColor: selectedSchemeColor,
                borderColor: '#fff',
                data: [1.2, 1, 0.6, 0.4],
            }],
            display: false
        };
        
        let chartBackend = new Chart(ctxBackend, {
                data: dataBackend,
                type: 'polarArea',
                options: options
        });
        console.log(selectedSchemeColor);
        let body = document.addEventListener('change', ()=> {
            if(Boolean(document.querySelector('body').classList[0])){
                chartFrontend.options.legend.labels.fontColor = '#FFF';
                chartBackend.options.legend.labels.fontColor = '#FFF';
                chartMobile.options.legend.labels.fontColor = '#FFF';
                chartOther.options.legend.labels.fontColor = '#FFF';
            } else {
                chartFrontend.options.legend.labels.fontColor = '#666';
                chartBackend.options.legend.labels.fontColor = '#666';
                chartMobile.options.legend.labels.fontColor = '#666';
                chartOther.options.legend.labels.fontColor = '#666';
            }
            chartFrontend.update();
            chartBackend.update();
            chartMobile.update();
            chartOther.update();
        });
        let styleSwitcher = document.querySelector('.style-switcher');
        styleSwitcher.addEventListener('click',(e) => {
            selectedSchemeColor = this.getSelectedSchemeColor(e.target.title);
            chartFrontend.data.datasets[0].backgroundColor = selectedSchemeColor;
            chartBackend.data.datasets[0].backgroundColor = selectedSchemeColor;
            chartMobile.data.datasets[0].backgroundColor = selectedSchemeColor;
            chartOther.data.datasets[0].backgroundColor = selectedSchemeColor;
            chartFrontend.update();
            chartBackend.update();
            chartMobile.update();
            chartOther.update();
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
            <div className="skills-container">
                <ReactTooltip id='global' aria-haspopup='true' >
                    <p>I don't reaaaally believe in skill charts...</p>
                    <p>but hey!</p>
                    <p>they look so cool!</p>
                    <p>And they show I can work with dinamic charts :)</p>
                </ReactTooltip>
                {/* data-tip="" */}
                <h3 className="skills-title">Tech Experience (in years)<FontAwesomeIcon icon={faInfoCircle} data-tip="Yes, this is code." data-tip data-for='global'/></h3>
                <div className="skill-chart">
                    <div className="skill-filter padd-15">
                        <button onClick={this.changeFilter} className="active" type="button" value="backend">Backend</button>
                        <button onClick={this.changeFilter} type="button" value="frontend">Frontend</button>
                        <button onClick={this.changeFilter} type="button" value="mobile">Mobile</button>
                        <button onClick={this.changeFilter} type="button" value="other">Other</button>
                    </div>
                    <canvas id="chartBackend" title="backend" className='' width="20w" height="20h"></canvas>
                    <canvas id="chartFrontend" title="frontend" className='hidden' width="20w" height="20h"></canvas>
                    <canvas id="chartMobile" title="mobile" className='hidden' width="20w" height="20h"></canvas>
                    <canvas id="chartOther" title="other" className='hidden' width="20w" height="20h"></canvas>
                </div>
            </div>
    )}

}



export default SkillsChart;
