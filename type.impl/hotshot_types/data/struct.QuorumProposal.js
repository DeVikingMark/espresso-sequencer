(function() {
    var type_impls = Object.fromEntries([["hotshot_query_service",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-QuorumProposal%3CTYPES%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hotshot_types/data.rs.html#717\">Source</a><a href=\"#impl-Clone-for-QuorumProposal%3CTYPES%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;TYPES&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"hotshot_types/data/struct.QuorumProposal.html\" title=\"struct hotshot_types::data::QuorumProposal\">QuorumProposal</a>&lt;TYPES&gt;<div class=\"where\">where\n    TYPES: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>,\n    &lt;TYPES as <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>&gt;::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.BlockHeader\" title=\"type hotshot_types::traits::node_implementation::NodeType::BlockHeader\">BlockHeader</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    &lt;TYPES as <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>&gt;::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.View\" title=\"type hotshot_types::traits::node_implementation::NodeType::View\">View</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot_types/data.rs.html#717\">Source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.85.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"hotshot_types/data/struct.QuorumProposal.html\" title=\"struct hotshot_types::data::QuorumProposal\">QuorumProposal</a>&lt;TYPES&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.85.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.85.0/src/core/clone.rs.html#174\">Source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.85.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.85.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","hotshot_query_service::testing::mocks::MockQuorumProposal"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-QuorumProposal%3CTYPES%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hotshot_types/data.rs.html#717\">Source</a><a href=\"#impl-Debug-for-QuorumProposal%3CTYPES%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;TYPES&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"hotshot_types/data/struct.QuorumProposal.html\" title=\"struct hotshot_types::data::QuorumProposal\">QuorumProposal</a>&lt;TYPES&gt;<div class=\"where\">where\n    TYPES: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>,\n    <a class=\"struct\" href=\"hotshot_types/simple_certificate/struct.SimpleCertificate.html\" title=\"struct hotshot_types::simple_certificate::SimpleCertificate\">SimpleCertificate</a>&lt;TYPES, <a class=\"struct\" href=\"hotshot_types/simple_vote/struct.QuorumData.html\" title=\"struct hotshot_types::simple_vote::QuorumData\">QuorumData</a>&lt;TYPES&gt;, <a class=\"struct\" href=\"hotshot_types/simple_certificate/struct.SuccessThreshold.html\" title=\"struct hotshot_types::simple_certificate::SuccessThreshold\">SuccessThreshold</a>&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    <a class=\"enum\" href=\"https://doc.rust-lang.org/1.85.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"hotshot_types/simple_certificate/struct.SimpleCertificate.html\" title=\"struct hotshot_types::simple_certificate::SimpleCertificate\">SimpleCertificate</a>&lt;TYPES, <a class=\"struct\" href=\"hotshot_types/simple_vote/struct.UpgradeProposalData.html\" title=\"struct hotshot_types::simple_vote::UpgradeProposalData\">UpgradeProposalData</a>&lt;TYPES&gt;, <a class=\"struct\" href=\"hotshot_types/simple_certificate/struct.UpgradeThreshold.html\" title=\"struct hotshot_types::simple_certificate::UpgradeThreshold\">UpgradeThreshold</a>&gt;&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    <a class=\"enum\" href=\"https://doc.rust-lang.org/1.85.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"hotshot_types/data/enum.ViewChangeEvidence.html\" title=\"enum hotshot_types::data::ViewChangeEvidence\">ViewChangeEvidence</a>&lt;TYPES&gt;&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot_types/data.rs.html#717\">Source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.85.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, __derive_more_f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.85.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.85.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.85.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.85.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","hotshot_query_service::testing::mocks::MockQuorumProposal"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deserialize%3C'de%3E-for-QuorumProposal%3CTYPES%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hotshot_types/data.rs.html#717\">Source</a><a href=\"#impl-Deserialize%3C'de%3E-for-QuorumProposal%3CTYPES%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'de, TYPES&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.218/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"hotshot_types/data/struct.QuorumProposal.html\" title=\"struct hotshot_types::data::QuorumProposal\">QuorumProposal</a>&lt;TYPES&gt;<div class=\"where\">where\n    TYPES: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.deserialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot_types/data.rs.html#717\">Source</a><a href=\"#method.deserialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.218/serde/de/trait.Deserialize.html#tymethod.deserialize\" class=\"fn\">deserialize</a>&lt;__D&gt;(\n    __deserializer: __D,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.85.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"hotshot_types/data/struct.QuorumProposal.html\" title=\"struct hotshot_types::data::QuorumProposal\">QuorumProposal</a>&lt;TYPES&gt;, &lt;__D as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.218/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.218/serde/de/trait.Deserializer.html#associatedtype.Error\" title=\"type serde::de::Deserializer::Error\">Error</a>&gt;<div class=\"where\">where\n    __D: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.218/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;,</div></h4></section></summary><div class='docblock'>Deserialize this value from the given Serde deserializer. <a href=\"https://docs.rs/serde/1.0.218/serde/de/trait.Deserialize.html#tymethod.deserialize\">Read more</a></div></details></div></details>","Deserialize<'de>","hotshot_query_service::testing::mocks::MockQuorumProposal"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CQuorumProposal2%3CTYPES%3E%3E-for-QuorumProposal%3CTYPES%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hotshot_types/data.rs.html#897\">Source</a><a href=\"#impl-From%3CQuorumProposal2%3CTYPES%3E%3E-for-QuorumProposal%3CTYPES%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;TYPES&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"hotshot_types/data/struct.QuorumProposal2.html\" title=\"struct hotshot_types::data::QuorumProposal2\">QuorumProposal2</a>&lt;TYPES&gt;&gt; for <a class=\"struct\" href=\"hotshot_types/data/struct.QuorumProposal.html\" title=\"struct hotshot_types::data::QuorumProposal\">QuorumProposal</a>&lt;TYPES&gt;<div class=\"where\">where\n    TYPES: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot_types/data.rs.html#898\">Source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.85.0/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(quorum_proposal2: <a class=\"struct\" href=\"hotshot_types/data/struct.QuorumProposal2.html\" title=\"struct hotshot_types::data::QuorumProposal2\">QuorumProposal2</a>&lt;TYPES&gt;) -&gt; <a class=\"struct\" href=\"hotshot_types/data/struct.QuorumProposal.html\" title=\"struct hotshot_types::data::QuorumProposal\">QuorumProposal</a>&lt;TYPES&gt;</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<QuorumProposal2<TYPES>>","hotshot_query_service::testing::mocks::MockQuorumProposal"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CQuorumProposalWrapper%3CTYPES%3E%3E-for-QuorumProposal%3CTYPES%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hotshot_types/data.rs.html#868\">Source</a><a href=\"#impl-From%3CQuorumProposalWrapper%3CTYPES%3E%3E-for-QuorumProposal%3CTYPES%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;TYPES&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"hotshot_types/data/struct.QuorumProposalWrapper.html\" title=\"struct hotshot_types::data::QuorumProposalWrapper\">QuorumProposalWrapper</a>&lt;TYPES&gt;&gt; for <a class=\"struct\" href=\"hotshot_types/data/struct.QuorumProposal.html\" title=\"struct hotshot_types::data::QuorumProposal\">QuorumProposal</a>&lt;TYPES&gt;<div class=\"where\">where\n    TYPES: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot_types/data.rs.html#869\">Source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.85.0/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(\n    quorum_proposal_wrapper: <a class=\"struct\" href=\"hotshot_types/data/struct.QuorumProposalWrapper.html\" title=\"struct hotshot_types::data::QuorumProposalWrapper\">QuorumProposalWrapper</a>&lt;TYPES&gt;,\n) -&gt; <a class=\"struct\" href=\"hotshot_types/data/struct.QuorumProposal.html\" title=\"struct hotshot_types::data::QuorumProposal\">QuorumProposal</a>&lt;TYPES&gt;</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<QuorumProposalWrapper<TYPES>>","hotshot_query_service::testing::mocks::MockQuorumProposal"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-HasEpoch%3CTYPES%3E-for-QuorumProposal%3CTYPES%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hotshot_types/data.rs.html#968-973\">Source</a><a href=\"#impl-HasEpoch%3CTYPES%3E-for-QuorumProposal%3CTYPES%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;TYPES&gt; <a class=\"trait\" href=\"hotshot_types/simple_vote/trait.HasEpoch.html\" title=\"trait hotshot_types::simple_vote::HasEpoch\">HasEpoch</a>&lt;TYPES&gt; for <a class=\"struct\" href=\"hotshot_types/data/struct.QuorumProposal.html\" title=\"struct hotshot_types::data::QuorumProposal\">QuorumProposal</a>&lt;TYPES&gt;<div class=\"where\">where\n    TYPES: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.epoch\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot_types/data.rs.html#968-973\">Source</a><a href=\"#method.epoch\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_types/simple_vote/trait.HasEpoch.html#tymethod.epoch\" class=\"fn\">epoch</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.85.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&lt;TYPES as <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>&gt;::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.Epoch\" title=\"type hotshot_types::traits::node_implementation::NodeType::Epoch\">Epoch</a>&gt;</h4></section></summary><div class='docblock'>Returns <code>Epoch</code></div></details></div></details>","HasEpoch<TYPES>","hotshot_query_service::testing::mocks::MockQuorumProposal"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-HasViewNumber%3CTYPES%3E-for-QuorumProposal%3CTYPES%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hotshot_types/data.rs.html#942\">Source</a><a href=\"#impl-HasViewNumber%3CTYPES%3E-for-QuorumProposal%3CTYPES%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;TYPES&gt; <a class=\"trait\" href=\"hotshot_types/vote/trait.HasViewNumber.html\" title=\"trait hotshot_types::vote::HasViewNumber\">HasViewNumber</a>&lt;TYPES&gt; for <a class=\"struct\" href=\"hotshot_types/data/struct.QuorumProposal.html\" title=\"struct hotshot_types::data::QuorumProposal\">QuorumProposal</a>&lt;TYPES&gt;<div class=\"where\">where\n    TYPES: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.view_number\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot_types/data.rs.html#943\">Source</a><a href=\"#method.view_number\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_types/vote/trait.HasViewNumber.html#tymethod.view_number\" class=\"fn\">view_number</a>(&amp;self) -&gt; &lt;TYPES as <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>&gt;::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.View\" title=\"type hotshot_types::traits::node_implementation::NodeType::View\">View</a></h4></section></summary><div class='docblock'>Returns the view number the type refers to.</div></details></div></details>","HasViewNumber<TYPES>","hotshot_query_service::testing::mocks::MockQuorumProposal"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Hash-for-QuorumProposal%3CTYPES%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hotshot_types/data.rs.html#717\">Source</a><a href=\"#impl-Hash-for-QuorumProposal%3CTYPES%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;TYPES&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"hotshot_types/data/struct.QuorumProposal.html\" title=\"struct hotshot_types::data::QuorumProposal\">QuorumProposal</a>&lt;TYPES&gt;<div class=\"where\">where\n    TYPES: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>,\n    &lt;TYPES as <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>&gt;::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.BlockHeader\" title=\"type hotshot_types::traits::node_implementation::NodeType::BlockHeader\">BlockHeader</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,\n    &lt;TYPES as <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>&gt;::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.View\" title=\"type hotshot_types::traits::node_implementation::NodeType::View\">View</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot_types/data.rs.html#717\">Source</a><a href=\"#method.hash\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.85.0/core/hash/trait.Hash.html#tymethod.hash\" class=\"fn\">hash</a>&lt;__H&gt;(&amp;self, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.0/std/primitive.reference.html\">&amp;mut __H</a>)<div class=\"where\">where\n    __H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,</div></h4></section></summary><div class='docblock'>Feeds this value into the given <a href=\"https://doc.rust-lang.org/1.85.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.85.0/core/hash/trait.Hash.html#tymethod.hash\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash_slice\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.3.0\">1.3.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.85.0/src/core/hash/mod.rs.html#235-237\">Source</a></span><a href=\"#method.hash_slice\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.85.0/core/hash/trait.Hash.html#method.hash_slice\" class=\"fn\">hash_slice</a>&lt;H&gt;(data: &amp;[Self], state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.0/std/primitive.reference.html\">&amp;mut H</a>)<div class=\"where\">where\n    H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Feeds a slice of this type into the given <a href=\"https://doc.rust-lang.org/1.85.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.85.0/core/hash/trait.Hash.html#method.hash_slice\">Read more</a></div></details></div></details>","Hash","hotshot_query_service::testing::mocks::MockQuorumProposal"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-QuorumProposal%3CTYPES%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hotshot_types/data.rs.html#717\">Source</a><a href=\"#impl-PartialEq-for-QuorumProposal%3CTYPES%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;TYPES&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"hotshot_types/data/struct.QuorumProposal.html\" title=\"struct hotshot_types::data::QuorumProposal\">QuorumProposal</a>&lt;TYPES&gt;<div class=\"where\">where\n    TYPES: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>,\n    &lt;TYPES as <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>&gt;::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.BlockHeader\" title=\"type hotshot_types::traits::node_implementation::NodeType::BlockHeader\">BlockHeader</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>,\n    &lt;TYPES as <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>&gt;::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.View\" title=\"type hotshot_types::traits::node_implementation::NodeType::View\">View</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot_types/data.rs.html#717\">Source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.85.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"hotshot_types/data/struct.QuorumProposal.html\" title=\"struct hotshot_types::data::QuorumProposal\">QuorumProposal</a>&lt;TYPES&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests for <code>self</code> and <code>other</code> values to be equal, and is used by <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.85.0/src/core/cmp.rs.html#261\">Source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.85.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests for <code>!=</code>. The default implementation is almost always sufficient,\nand should not be overridden without very good reason.</div></details></div></details>","PartialEq","hotshot_query_service::testing::mocks::MockQuorumProposal"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Serialize-for-QuorumProposal%3CTYPES%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hotshot_types/data.rs.html#717\">Source</a><a href=\"#impl-Serialize-for-QuorumProposal%3CTYPES%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;TYPES&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.218/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"hotshot_types/data/struct.QuorumProposal.html\" title=\"struct hotshot_types::data::QuorumProposal\">QuorumProposal</a>&lt;TYPES&gt;<div class=\"where\">where\n    TYPES: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.218/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,\n    &lt;TYPES as <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>&gt;::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.BlockHeader\" title=\"type hotshot_types::traits::node_implementation::NodeType::BlockHeader\">BlockHeader</a>: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.218/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,\n    &lt;TYPES as <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>&gt;::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.View\" title=\"type hotshot_types::traits::node_implementation::NodeType::View\">View</a>: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.218/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot_types/data.rs.html#717\">Source</a><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.218/serde/ser/trait.Serialize.html#tymethod.serialize\" class=\"fn\">serialize</a>&lt;__S&gt;(\n    &amp;self,\n    __serializer: __S,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.85.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;__S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.218/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.218/serde/ser/trait.Serializer.html#associatedtype.Ok\" title=\"type serde::ser::Serializer::Ok\">Ok</a>, &lt;__S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.218/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.218/serde/ser/trait.Serializer.html#associatedtype.Error\" title=\"type serde::ser::Serializer::Error\">Error</a>&gt;<div class=\"where\">where\n    __S: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.218/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>,</div></h4></section></summary><div class='docblock'>Serialize this value into the given Serde serializer. <a href=\"https://docs.rs/serde/1.0.218/serde/ser/trait.Serialize.html#tymethod.serialize\">Read more</a></div></details></div></details>","Serialize","hotshot_query_service::testing::mocks::MockQuorumProposal"],["<section id=\"impl-Eq-for-QuorumProposal%3CTYPES%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hotshot_types/data.rs.html#717\">Source</a><a href=\"#impl-Eq-for-QuorumProposal%3CTYPES%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;TYPES&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"hotshot_types/data/struct.QuorumProposal.html\" title=\"struct hotshot_types::data::QuorumProposal\">QuorumProposal</a>&lt;TYPES&gt;<div class=\"where\">where\n    TYPES: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>,\n    &lt;TYPES as <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>&gt;::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.BlockHeader\" title=\"type hotshot_types::traits::node_implementation::NodeType::BlockHeader\">BlockHeader</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,\n    &lt;TYPES as <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>&gt;::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.View\" title=\"type hotshot_types::traits::node_implementation::NodeType::View\">View</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,</div></h3></section>","Eq","hotshot_query_service::testing::mocks::MockQuorumProposal"],["<section id=\"impl-StructuralPartialEq-for-QuorumProposal%3CTYPES%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hotshot_types/data.rs.html#717\">Source</a><a href=\"#impl-StructuralPartialEq-for-QuorumProposal%3CTYPES%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;TYPES&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"hotshot_types/data/struct.QuorumProposal.html\" title=\"struct hotshot_types::data::QuorumProposal\">QuorumProposal</a>&lt;TYPES&gt;<div class=\"where\">where\n    TYPES: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>,</div></h3></section>","StructuralPartialEq","hotshot_query_service::testing::mocks::MockQuorumProposal"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[34145]}