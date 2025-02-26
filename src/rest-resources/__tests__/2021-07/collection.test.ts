import {Session} from '../../../auth/session';
import {Context} from '../../../context';
import {ApiVersion} from '../../../base-types';

import {Collection} from '../../2021-07';

describe('Collection resource', () => {
  const domain = 'test-shop.myshopify.io';
  const headers = {'X-Shopify-Access-Token': 'this_is_a_test_token'};
  const test_session = new Session('1234', domain, '1234', true);
  test_session.accessToken = 'this_is_a_test_token';

  beforeEach(() => {
    Context.API_VERSION = ApiVersion.July21;
  });

  it('test_1', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({"collection": {"id": 841564295, "handle": "ipods", "title": "IPods", "updated_at": "2008-02-01T19:00:00-05:00", "body_html": "<p>The best selling ipod ever</p>", "published_at": "2008-02-01T19:00:00-05:00", "sort_order": "manual", "template_suffix": null, "products_count": 1, "collection_type": "custom", "published_scope": "web", "admin_graphql_api_id": "gid://shopify/Collection/841564295", "image": {"created_at": "2022-04-05T13:17:47-04:00", "alt": "MP3 Player 8gb", "width": 123, "height": 456, "src": "https://cdn.shopify.com/s/files/1/0005/4838/0009/collections/ipod_nano_8gb.jpg?v=1649179067"}}}));

    await Collection.find({
      session: test_session,
      id: 841564295,
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2021-07/collections/841564295.json',
      query: '',
      headers,
      data: null
    }).toMatchMadeHttpRequest();
  });

  it('test_2', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({"products": [{"id": 632910392, "title": "IPod Nano - 8GB", "body_html": "<p>It's the small iPod with one very big idea: Video. Now the world's most popular music player, available in 4GB and 8GB models, lets you enjoy TV shows, movies, video podcasts, and more. The larger, brighter display means amazing picture quality. In six eye-catching colors, iPod nano is stunning all around. And with models starting at just $149, little speaks volumes.</p>", "vendor": "Apple", "product_type": "Cult Products", "created_at": "2022-04-05T13:17:47-04:00", "handle": "ipod-nano", "updated_at": "2022-04-05T13:17:47-04:00", "published_at": "2007-12-31T19:00:00-05:00", "template_suffix": null, "published_scope": "web", "tags": "Emotive, Flash Memory, MP3, Music", "admin_graphql_api_id": "gid://shopify/Product/632910392", "options": [{"id": 594680422, "product_id": 632910392, "name": "Color", "position": 1}], "images": [{"id": 850703190, "product_id": 632910392, "position": 1, "created_at": "2022-04-05T13:17:47-04:00", "updated_at": "2022-04-05T13:17:47-04:00", "alt": null, "width": 123, "height": 456, "src": "https://cdn.shopify.com/s/files/1/0005/4838/0009/products/ipod-nano.png?v=1649179067", "variant_ids": [], "admin_graphql_api_id": "gid://shopify/ProductImage/850703190"}, {"id": 562641783, "product_id": 632910392, "position": 2, "created_at": "2022-04-05T13:17:47-04:00", "updated_at": "2022-04-05T13:17:47-04:00", "alt": null, "width": 123, "height": 456, "src": "https://cdn.shopify.com/s/files/1/0005/4838/0009/products/ipod-nano-2.png?v=1649179067", "variant_ids": [808950810], "admin_graphql_api_id": "gid://shopify/ProductImage/562641783"}, {"id": 378407906, "product_id": 632910392, "position": 3, "created_at": "2022-04-05T13:17:47-04:00", "updated_at": "2022-04-05T13:17:47-04:00", "alt": null, "width": 123, "height": 456, "src": "https://cdn.shopify.com/s/files/1/0005/4838/0009/products/ipod-nano.png?v=1649179067", "variant_ids": [], "admin_graphql_api_id": "gid://shopify/ProductImage/378407906"}], "image": {"id": 850703190, "product_id": 632910392, "position": 1, "created_at": "2022-04-05T13:17:47-04:00", "updated_at": "2022-04-05T13:17:47-04:00", "alt": null, "width": 123, "height": 456, "src": "https://cdn.shopify.com/s/files/1/0005/4838/0009/products/ipod-nano.png?v=1649179067", "variant_ids": [], "admin_graphql_api_id": "gid://shopify/ProductImage/850703190"}}]}));

    await Collection.products({
      session: test_session,
      id: 841564295,
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2021-07/collections/841564295/products.json',
      query: '',
      headers,
      data: null
    }).toMatchMadeHttpRequest();
  });

});
