let isPaused = true;
let isWorking = true;
let cycles = 0;
let id;

const set_work = "25:00";
const set_break = "05:00";
const set_cyclebreak = "15:00";

function delay(ms) 
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

function DecideTimer()
{
    if(isPaused)
    {
        isPaused = false;
        console.log(isWorking);
        if(isWorking)
        {
            Start("work_timer");
            if(parseInt(document.getElementById("cycle_counter").textContent, 10) == 4)
            {
                document.getElementById("break_timer").textContent = set_cyclebreak;
            } 
            else
            {
                document.getElementById("break_timer").textContent = set_break;
            }
        } 
        else
        {
           Start("break_timer"); 
           document.getElementById("work_timer").textContent = set_work;
        }
    } 
}
async function Start(id)
{
    let timer = document.getElementById(id);
    while(!isPaused)
    {
        let [min, sec] = timer.textContent.split(":");
        min = parseInt(min, 10);
        sec = parseInt(sec, 10);
        
        
        UpdateTimer(timer, min, sec);
        await delay(1000);
        
    } 
}
function UpdateCycle()
{
    let cyclesStr = document.getElementById("cycle_counter");
    cyclesStr.textContent = (cycles + 1) % 4;
    cycles += 1;
}
function UpdateTimer(timer, min, sec)
{
    if(min == 0 && sec == 0)
    {
        isPaused = true;
        if(isWorking)
        {
            
            alert("Your work session has ended. It's time for a 5 minutes break! Click Start to begin your break timer.");
            UpdateCycle();
        } 
        else
        {
            alert("Your 5 minutes break has ended. Let's get back to work! Click Start to begin your work timer.")
        }
        isWorking = !isWorking;
    }
    else
    {
        if(sec == 0)  
        {
            sec = 59;
            min -= 1;
        } 
        else
        {
            sec -= 1; 
        } 
        let secStr = String(sec);
        let minStr = String(min);
        if(sec < 10) secStr = "0" + secStr;
        if(min < 10) minStr = "0" + minStr;
        timer.textContent = minStr + ":" + secStr;
    }
}
function Pause()
{
    if(isPaused)
    {
        DecideTimer();
    } 
    else isPaused = true;
}
function Reset()
{
    isPaused = true;
    document.getElementById("work_timer").textContent = set_work;
    document.getElementById("break_timer").textContent = set_break;
    document.getElementById("cycle_counter").textContent = "0";
}
