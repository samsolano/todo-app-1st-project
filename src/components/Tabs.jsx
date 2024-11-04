export function Tabs(props) {

    const { selectedTab, setSelectedTab, todos } = props
    const tabs = ['all', 'open', 'complete']
    let numOfTasks = 0
    // console.log(todos)

    return (
      <nav className="tab-container"> 
            {tabs.map((tab, tabIndex) => {

                numOfTasks = (tab === 'all') ? todos.length 
                    : tab === 'open' ? todos.filter(val => !val.complete).length
                    : todos.filter(val => val.complete).length



                return (
                    <button key={tabIndex} 
                    className={"tab-button " + (selectedTab === tab ? " tab-selected" : ' ')}
                    onClick={() => {
                        setSelectedTab(tab)

                    }}> {tab}({numOfTasks}) </button>
                )
            })}
            <hr /> {/* horizontal line */}
      </nav>
    )
  }
  
  
  //add dynamic className for button with tab-selected