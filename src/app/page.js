import resets from './_resets.module.css';
import classes from './page.module.css';
import { Vector1Icon } from './Vector1Icon';

export default function Home() {
  return (
    <div className={`${resets.pageResets} ${classes.root}`}>
      <div className={classes.rectangle2}></div>
      <div className={classes.icon_211}></div>
      <div className={classes.rectangle3}></div>
      <div><button className={classes.getStarted}>Get Started</button></div>
      <div className={classes.checkYourFinancialHealth}>Check your financial health</div>
      <div className={classes.useWeathoMeterToGetAFreeReport}>
        <div className={classes.textBlock}>Use WeathoMeter to get a free report</div>
        <div className={classes.textBlock2}>card for your finances- within minutes! </div>
      </div>
      <div className={classes.section}>
        <div className={classes.expectedRetirementAge}>Expected Retirement Age</div>
        <div className={classes.identifyMistakes}>Identify Mistakes</div>
        <div className={classes.line1}></div>
        <div className={classes.line2}></div>
        <div className={classes.icon_111}></div>
        <div className={classes.icon_112}></div>
      </div>
      <div className={classes.section}>
        <div className={classes.personalisedRoadMap}>Personalised Road Map</div>
        <div className={classes.tipsToImprove}>Tips To Improve</div>
        <div className={classes.line12}></div>
        <div className={classes.line22}></div>
        <div className={classes.icon_1112}></div>
        <div className={classes.icon_1122}></div>
      </div>
      <div className={classes.vector1}>
        <Vector1Icon className={classes.icon} />
      </div>
      <div className={classes.rectangle32}></div>
      <div ><button className={classes.getStarted2}>Get Started</button></div>
      <div className={classes.howItWorks}>How it works?</div>
      <div className={classes.icon_11}></div>
      <div className={classes.answerFewQuestions}>
        <div className={classes.textBlock3}>Answer few</div>
        <div className={classes.textBlock4}>questions</div>
      </div>
      <div className={classes.registerUsingPhoneAndOTP}>
        <div className={classes.textBlock5}>Register using</div>
        <div className={classes.textBlock6}>phone and OTP</div>
      </div>
      <div className={classes.getReportAndPersonalRoadmap}>
        <div className={classes.textBlock7}>Get report and</div>
        <div className={classes.textBlock8}>personal roadmap</div>
      </div>
    </div>
  );
}
