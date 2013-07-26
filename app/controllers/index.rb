get '/' do
  erb :index
end

post '/color' do
  response = []
  cell= rand(1..9)
  color= "#" + "%06x" % (rand * 0xffffff)
  response << cell
  response << color
  response.to_json
end