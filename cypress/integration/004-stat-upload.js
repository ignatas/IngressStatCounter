import PageSignIn from "../pageObjects/page-signin"
import PageSignUp from "../pageObjects/page-signup"
import Header from "../pageObjects/header"
import PageUpload from "../pageObjects/page-upload"
import Chance from 'chance'

let agent = {
    username: chance.first() + chance.last(),
    password: chance.hash(),
    nickname: chance.word({ length: 15 }),
    email: chance.email({ domain: 'yopmail.com' })
}

describe('Uploader', () => {

    it('positive: registration', () => {
        cy.visit('')
        cy.contains('Log in to your account')
        PageSignIn.clickSignUp()
        cy.log('[username = ](http://i.com)' + agent.username)
        cy.log('[password = ](http://i.com)' + agent.password)
        cy.log('[nick = ](http://i.com)' + agent.nickname)
        cy.log('[email = ](http://i.com)' + agent.email)
        PageSignUp.newUsername(agent.username)
        PageSignUp.newPassword(agent.password)
        PageSignUp.newConfirmPassword(agent.password)
        PageSignUp.newAgentName(agent.nickname)
        PageSignUp.newEmail(agent.email)
        PageSignUp.checkConfirmation()
        PageSignUp.clickRegisterButton()
        cy.contains('This Username, Agent Name or Email already exist but not confirmed.')
    })

    it('positive: new user uploads stats', () => {
        //new user logins
        cy.visit('')
        cy.contains('Log in to your account')
        PageSignIn.setUsername(agent.username)
        PageSignIn.setPassword(agent.password)
        PageSignIn.clickLogInButton()
        cy.contains(agent.nickname)
        //new user uploads stats bronze
        cy.fixture('medals.json').then((medals) => {
            //upload bronze
            Header.clickUploadStats()
            cy.fixture('RandomStat').then((statdata) => {
                statdata = statdata.replace('_agentName_', agent.nickname)
                statdata = statdata.replace('_faction_', 'Resistance')
                statdata = statdata.replace('_date_', '2019-12-01')//Date.getFullYear()+'-'+Date.getMonth()+'-'+Date.getDate())
                statdata = statdata.replace('_time_', '00:00:00')//Date.getHours()+':'+Date.getMinutes()+':'+Date.getSeconds())
                statdata = statdata.replace('_lvl_', '10')
                statdata = statdata.replace('_allAp_', '10000000')
                statdata = statdata.replace('_currentAp_', '10000000')
                statdata = statdata.replace('_explorer_', medals.Explorer.Bronze)
                statdata = statdata.replace('_portalsDiscovered_', medals.Seer.Bronze)
                statdata = statdata.replace('_seer_', medals.Seer.Bronze)
                statdata = statdata.replace('_opr_', medals.Recon.Bronze)
                statdata = statdata.replace('_trekker_', medals.Trekker.Bronze)
                statdata = statdata.replace('_builder_', medals.Builder.Bronze)
                statdata = statdata.replace('_connector_', medals.Connector.Bronze)
                statdata = statdata.replace('_mindControl_', medals.MindController.Bronze)
                statdata = statdata.replace('_illuminator_', medals.Illuminator.Bronze)
                statdata = statdata.replace('_recharger_', medals.Recharger.Bronze)
                statdata = statdata.replace('_liberator_', medals.Liberator.Bronze)
                statdata = statdata.replace('_engineer_', medals.Engineer.Bronze)
                statdata = statdata.replace('_pioneer_', medals.Pioneer.Bronze)
                statdata = statdata.replace('_purifier_', medals.Purifier.Bronze)
                statdata = statdata.replace('_guardian_', medals.Guardian.Bronze)
                statdata = statdata.replace('_hacker_', medals.Hacker.Bronze)
                statdata = statdata.replace('_translator_', medals.Translator.Bronze)
                statdata = statdata.replace('_sojourner_', medals.Sojourner.Bronze)
                statdata = statdata.replace('_fs_', medals.FirstSaturday.Bronze)
                //and type stat into field
                PageUpload.setStats(statdata)
            })
            PageUpload.setMessage(Date.now() + ' Hello There, i got all Bronze')
            PageUpload.checkPublicUpload()
            PageUpload.clickUploadButton()
            cy.contains('Stats uploaded successfully')
            Header.clickMedals()
            cy.wait(2000)
            //upload gold
            Header.clickUploadStats()
            cy.fixture('RandomStat').then((statdata) => {
                statdata = statdata.replace('_agentName_', agent.nickname)
                statdata = statdata.replace('_faction_', 'Resistance')
                statdata = statdata.replace('_date_', '2019-12-01')//Date.getFullYear()+'-'+Date.getMonth()+'-'+Date.getDate())
                statdata = statdata.replace('_time_', '01:00:00')//Date.getHours()+':'+Date.getMinutes()+':'+Date.getSeconds())
                statdata = statdata.replace('_lvl_', '10')
                statdata = statdata.replace('_allAp_', '20000000')
                statdata = statdata.replace('_currentAp_', '20000000')
                statdata = statdata.replace('_explorer_', medals.Explorer.Gold)
                statdata = statdata.replace('_portalsDiscovered_', medals.Seer.Gold)
                statdata = statdata.replace('_seer_', medals.Seer.Gold)
                statdata = statdata.replace('_opr_', medals.Recon.Gold)
                statdata = statdata.replace('_trekker_', medals.Trekker.Gold)
                statdata = statdata.replace('_builder_', medals.Builder.Gold)
                statdata = statdata.replace('_connector_', medals.Connector.Gold)
                statdata = statdata.replace('_mindControl_', medals.MindController.Gold)
                statdata = statdata.replace('_illuminator_', medals.Illuminator.Gold)
                statdata = statdata.replace('_recharger_', medals.Recharger.Gold)
                statdata = statdata.replace('_liberator_', medals.Liberator.Gold)
                statdata = statdata.replace('_engineer_', medals.Engineer.Gold)
                statdata = statdata.replace('_pioneer_', medals.Pioneer.Gold)
                statdata = statdata.replace('_purifier_', medals.Purifier.Gold)
                statdata = statdata.replace('_guardian_', medals.Guardian.Gold)
                statdata = statdata.replace('_hacker_', medals.Hacker.Gold)
                statdata = statdata.replace('_translator_', medals.Translator.Gold)
                statdata = statdata.replace('_sojourner_', medals.Sojourner.Gold)
                statdata = statdata.replace('_fs_', medals.FirstSaturday.Gold)
                //and type stat into field
                PageUpload.setStats(statdata)
            })
            PageUpload.setMessage(Date.now() + ' Hello There, i got all Gold')
            PageUpload.checkPublicUpload()
            PageUpload.clickUploadButton()
            cy.contains('Stats uploaded successfully')
            Header.clickMedals()
        })

    })

})