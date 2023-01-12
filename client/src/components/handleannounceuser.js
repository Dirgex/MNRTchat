const HandleAnnounceUser = ({userlist}) => {
    return(
    <div className="text-center w-50 m-auto">
        {userlist.map((item) => {
          return <h4 className="bg-info border border-primary rounded" key={item}>{item} has connected</h4>;
        })}
      </div>
    )
}

export default HandleAnnounceUser